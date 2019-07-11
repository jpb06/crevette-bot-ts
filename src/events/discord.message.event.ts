import { Message, TextChannel, MessageAttachment } from 'discord.js';
import { RelicChunkyParser, Types as RelicChunkyTypes } from 'relic-chunky-parser';

import { Logger } from './../util/logging.helper';
import { EmbedHelper } from './../util/embed.helper';
import { FilesHelper } from './../util/files.helper';

import { BotSettings } from './../configuration/bot.settings';

export abstract class MessageEvent {

    public static async Handle(
        message: Message,
        botUsername: string,
        botAvatarUrl: string
    ): Promise<void> {
        try {

            if (message.author.bot || message.channel.type !== 'text') return; // not replying to others bots; only messages in text channels should be treated

            let textChannel = <TextChannel>message.channel;
            EmbedHelper.Setup(textChannel, botUsername, botAvatarUrl);

            if (message.content.startsWith(BotSettings.prefix)) { }
            else if (BotSettings.replaysChannels.includes(textChannel.name)) {

                // for tests
                //if(message.guild.name === 'dowpro (mod for Dawn of War)') return;

                if (message.attachments.size === 0) return;

                message.attachments.forEach(async (attachment) => {
                    await MessageEvent.describeReplay(attachment, BotSettings.downloadsFolder, message.author.displayAvatarURL);
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

            let replayData: RelicChunkyTypes.MapData = await RelicChunkyParser.getReplayData(path);

            attachment.message.delete().then(msg => {
                msg.channel.send({
                    embed: EmbedHelper.populateReplayInfos(
                        senderAvatarUrl,
                        msg.author.username,
                        path,
                        replayData)
                }).then(sentMsg => {
                    FilesHelper.delete(path);
                });
            }).catch(deleteErr => {
                Logger.Error(deleteErr.stack);
            });
        }
    }
}