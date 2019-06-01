import { Guild } from 'discord.js';

import { Logger } from '../util/logging.helper';

export abstract class GuildDeleteEvent {

    public static async Handle(
        guild: Guild
    ): Promise<void> {
        try {
            Logger.Message(`Removed from: ${guild.name} (id: ${guild.id})`);

        } catch (err) {
            await Logger.Error(err);
        }
    }
}