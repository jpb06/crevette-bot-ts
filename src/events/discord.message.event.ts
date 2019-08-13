import { Message, TextChannel, MessageAttachment } from 'discord.js';
import { RelicChunkyParser, Types as RelicChunkyTypes } from 'relic-chunky-parser';
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
        botUsername: string,
        botAvatarUrl: string
    ): Promise<void> {
        try {
            // not replying to others bots; only messages in text channels should be treated
            if (message.author.bot || message.channel.type !== 'text') return;

            let textChannel = <TextChannel>message.channel;
            EmbedHelper.Setup(textChannel, botUsername, botAvatarUrl);

            if (message.content.startsWith(BotSettings.prefix)) { }
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

                message.attachments.forEach(async (attachment) => {
                    await MessageEvent.describeLadderEncryptedReplay(
                        attachment,
                        BotSettings.downloadsFolder,
                        message.author.displayAvatarURL);
                    await MessageEvent.describeReplay(
                        attachment,
                        BotSettings.downloadsFolder,
                        message.author.displayAvatarURL);
                });
            }

        } catch (error) {
            await Logger.Error(error);
        }
    }

    private static async describeReplay(
        attachment: MessageAttachment,
        downloadsFolder: string,
        senderAvatarUrl: string
    ) {
        if (attachment.filename.substr(attachment.filename.lastIndexOf('.') + 1) === 'rec') {

            let path = './' + downloadsFolder + '/' + attachment.filename;
            await FilesHelper.saveFromUrlUsingHttps(attachment.url, path);

            let replayData = await RelicChunkyParser.getReplayData(path);
            if (replayData !== undefined) {
                attachment.message.delete().then(msg => {
                    msg.channel.send({
                        embed: EmbedHelper.populateReplayInfos(
                            senderAvatarUrl,
                            msg.author.username,
                            path,
                            <RelicChunkyTypes.MapData>replayData)
                    }).then(sentMsg => {
                        FilesHelper.delete(path);
                    });
                }).catch(deleteErr => {
                    Logger.Error(deleteErr.stack);
                });
            }

        }
    }

    private static async describeLadderEncryptedReplay(
        attachment: MessageAttachment,
        downloadsFolder: string,
        senderAvatarUrl: string
    ) {
        if (attachment.filename.substr(attachment.filename.lastIndexOf('.') + 1) !== 'ladder') {
            return;
        }

        let tempFolder = uuidv1();
        let path = `./${downloadsFolder}/${tempFolder}/${attachment.filename}`;
        let tempFolderPath = `./${downloadsFolder}/${tempFolder}`;

        await fs.ensureDir(tempFolderPath);
        await FilesHelper.saveFromUrlUsingHttps(attachment.url, path);
        await CryptoHelper.decryptFile(path, botConfig().CryptoKey);

        let decryptedFilePath = path + '.clear';

        let result = await Dal.Business.ReadGameResultArchive(
            tempFolder,
            decryptedFilePath,
            tempFolderPath,
            botConfig().gamesFilesRepositoryPath);

        if (result.status == Dal.Types.Status.Success) {

            let embed = await EmbedHelper.notifyGameResult({
                Hash: result.hash,
                MapName: result.mapName,
                Duration: result.duration,
                Players: result.playersStats,
                ModName: result.modName,
                ModVersion: result.modVersion
            });

            attachment.message.delete().then(msg => {
                msg.channel.send({
                    embed: embed
                }).then(sentMsg => {
                    FilesHelper.delete(path);
                });
            }).catch(deleteErr => {
                Logger.Error(deleteErr.stack);
            });

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