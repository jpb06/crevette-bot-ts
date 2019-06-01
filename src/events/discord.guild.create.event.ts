import { Guild } from 'discord.js';

import { Logger } from '../util/logging.helper';

export abstract class GuildCreateEvent {

    public static async Handle(
        guild: Guild
    ): Promise<void> {
        try {
            Logger.Message(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);

        } catch (err) {
            await Logger.Error(err);
        }
    }
}