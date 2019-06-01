import { Client } from 'discord.js';

import { Logger } from '../util/logging.helper';

export abstract class GlobalErrorEvent {

    public static async Handle(
        error: Error
    ): Promise<void> {
        await Logger.ErrorGlobal(error);
    }
}