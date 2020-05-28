import { Message, TextChannel, MessageAttachment, ClientUser } from 'discord.js';
import { RelicChunkyParser } from 'relic-chunky-parser';
import * as Dal from 'dowpro-replay-watcher-dal';
import * as fs from 'fs-extra';
import * as uuidv1 from 'uuid/v1';

import { Logger } from './../util/logging.helper';
import { EmbedHelper } from './../util/embed.helper';
import { FilesHelper } from './../util/files.helper';
import * as CryptoHelper from './../util/crypto.helper';

import { BotSettings } from './../configuration/bot.settings';
import { botConfig } from '../configuration/environment/bot.config.interface';
import moment = require('moment');

export abstract class MessageEvent {

    public static async Handle(
        message: Message,
        user: ClientUser
    ): Promise<void> {
        try {
            // not replying to others bots; only messages in text channels should be treated
            if (message.author.bot || message.channel.type !== 'text') return;

            const textChannel = message.channel as TextChannel;
            EmbedHelper.Setup(textChannel, user.username, user.avatarURL() as string);

            if (message.content.startsWith(BotSettings.prefix)) {
                // Todo
            }
            else if (BotSettings.replaysChannels.includes(textChannel.name)) {

                if (message.attachments.size === 0) return;

                // for tests
                // if(message.guild.name === 'dowpro (mod for Dawn of War)') return;

                // Testing .ladder files dropping
                //if (textChannel.name == "crevette-bot-tests") {
                //    message.attachments.forEach(async (attachment) => {
                //        await MessageEvent.describeLadderEncryptedReplay(
                //            attachment,
                //            BotSettings.downloadsFolder,
                //            message.author.displayAvatarURL);
                //    });
                //}
                //else { }

                const userName = message.author.username;
                const userAvatar = message.author.avatarURL() || message.author.defaultAvatarURL;

                //     let isOriginalMessageDeletable = false; 

                message.attachments.forEach(async (attachment) => {

                    await MessageEvent.describeReplay(
                        textChannel,
                        message,
                        attachment,
                        BotSettings.downloadsFolder,
                        userName, userAvatar
                    );

                    await MessageEvent.describeLadderEncryptedReplay(
                        textChannel,
                        message,
                        attachment,
                        BotSettings.downloadsFolder
                    );

                    //if (droppedRecSent || enqueuedRecSent) isOriginalMessageDeletable = true;
                });

                //if (isOriginalMessageDeletable) {
                //    message.delete().catch(deleteErr => Logger.Error(deleteErr.stack));
                //}
            }

        } catch (error) {
            await Logger.Error(error);
        }
    }

    private static async describeReplay(
        channel: TextChannel,
        originalMessage: Message,
        attachment: MessageAttachment,
        downloadsFolder: string,
        senderUsername: string,
        senderAvatarUrl: string
    ): Promise<void> {
        if (attachment.name && attachment.name.substr(attachment.name.lastIndexOf('.') + 1) === 'rec') {

            const path = `./${downloadsFolder}/${attachment.name}`;
            await FilesHelper.saveFromUrlUsingHttps(attachment.url, path);

            const replayData = await RelicChunkyParser.getReplayData(path);
            if (replayData !== undefined) {
                originalMessage.delete().then(deletedMessage => {
                    deletedMessage.channel.send({
                        embed: EmbedHelper.populateReplayInfos(senderAvatarUrl, senderUsername, path, replayData)
                    }).then(sentMessage => {
                        FilesHelper.delete(path);
                    });
                }).catch(err => Logger.Error(err.stack));
            }
        }
    }

    private static async describeLadderEncryptedReplay(
        channel: TextChannel,
        originalMessage: Message,
        attachment: MessageAttachment,
        downloadsFolder: string
    ): Promise<void> {
        if (attachment.name && attachment.name.substr(attachment.name.lastIndexOf('.') + 1) !== 'ladder') {
            return;
        }

        const tempFolder = uuidv1();
        const path = `./${downloadsFolder}/${tempFolder}/${attachment.name}`;
        const tempFolderPath = `./${downloadsFolder}/${tempFolder}`;

        await fs.ensureDir(tempFolderPath);
        await FilesHelper.saveFromUrlUsingHttps(attachment.url, path);
        await CryptoHelper.decryptFile(path, botConfig().CryptoKey);

        const decryptedFilePath = path + '.clear';

        const result = await Dal.Business.ReadGameResultArchive(
            tempFolder,
            decryptedFilePath,
            tempFolderPath,
            botConfig().gamesFilesRepositoryPath);

        if (result.status === Dal.Types.Status.Success) {

            const embed = await EmbedHelper.notifyGameResult({
                Hash: result.hash,
                MapName: result.mapName,
                Duration: result.duration,
                Players: result.playersStats,
                ModName: result.modName,
                ModVersion: result.modVersion
            });

            originalMessage.delete().then(deletedMessage => {
                deletedMessage.channel.send({
                    embed: embed
                }).then(sentMessage => {
                    FilesHelper.delete(path);
                });
            }).catch(err => Logger.Error(err.stack));

            await fs.remove(tempFolderPath);
            return;
        } else {
            if (result.status === Dal.Types.Status.AlreadyExistinginGamesStore && result.alreadyExistingGameData !== undefined) {
                EmbedHelper.GameAlreadyAddedError(
                    result.alreadyExistingGameData.mapName,
                    result.alreadyExistingGameData.mod,
                    `${moment(result.alreadyExistingGameData.dateAdded).format('MM/DD/YYYY HH:mm')} (UTC)`,
                    result.alreadyExistingGameData.players);
            } else {
                let errorDescription: string | undefined = undefined;

                switch (result.status) {
                    case Dal.Types.Status.UnableToUnzip:
                        errorDescription = 'Unable to unzip file';
                        break;
                    case Dal.Types.Status.UnableToLocateRecFile:
                        errorDescription = 'Unable to locate replay file';
                        break;
                    case Dal.Types.Status.UnableToComputeFileHash:
                        errorDescription = 'Unable to compute file hash';
                        break;
                    case Dal.Types.Status.UnableToParseJsonResultFile:
                        errorDescription = 'Unable to parse json result';
                        break;
                    case Dal.Types.Status.UnableToParseRecFile:
                        errorDescription = 'Unable to parse relic chunky file';
                        break;
                    case Dal.Types.Status.ResultsDoNotMatch:
                        errorDescription = 'Results mismatch detected';
                        break;
                    case Dal.Types.Status.InvalidPlayersCount:
                        errorDescription = 'Invalid players count';
                        break;
                }

                EmbedHelper.Error(errorDescription);
            }

            return;
        }
    }
}