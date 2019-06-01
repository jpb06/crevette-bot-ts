import { Client } from 'discord.js';

import { Logger } from '../util/logging.helper';
//import { generateInviteLink } from './../../businesslogic/util/invite.link.helper';

export abstract class ClientReadyEvent {

    public static async Handle(
        client: Client
    ): Promise<void> {
        try {
            await client.user.setActivity('DoWpro', { type: 'PLAYING' });

            // let link = generateInviteLink(client);

        } catch (err) {
            await Logger.Error(err);
        }
    }
}