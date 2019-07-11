import { Client, TextChannel } from 'discord.js';

import { Logger } from '../util/logging.helper';
import { Queuing } from 'node-message-broker';
import { Types } from 'dowpro-replay-watcher-dal';
import { EmbedHelper } from '../util/embed.helper';
//import { generateInviteLink } from './../../businesslogic/util/invite.link.helper';

export abstract class ClientReadyEvent {

    public static async Handle(
        client: Client
    ): Promise<void> {
        try {
            await client.user.setActivity('DoWpro', { type: 'PLAYING' });

            await Queuing.popFrom<Types.QueuedReplay>('incoming-games', async (game: Types.QueuedReplay) => {

                let embed = await EmbedHelper.notifyGameResult(game);

                if (game.ModName === 'dowpro') {
                    let channel = client.guilds.first().channels.find(el => el.name === 'replays_official_release');
                    if (channel && channel.type === "text") {
                        (<TextChannel>channel).send({ embed: embed });
                    }
                } else if (game.ModName === 'dowprotest') {
                    let channel = client.guilds.first().channels.find(el => el.name === 'test-version-room');
                    if (channel && channel.type === "text") {
                        (<TextChannel>channel).send({ embed: embed });
                    }
                }

                //let channel = client.guilds.first().channels.find(el => el.name === 'crevette-bot-tests');
                //if (channel && channel.type === "text") {
                //    (<TextChannel>channel).send({ embed: embed });
                //}
            });

            // let link = generateInviteLink(client);

        } catch (err) {
            await Logger.Error(err);
        }
    }
}