import * as Discord from 'discord.js';

import { ClientReadyEvent } from './events/discord.client.ready.event';
import { GuildCreateEvent } from './events/discord.guild.create.event';
import { GuildDeleteEvent } from './events/discord.guild.delete.event';
import { MessageEvent } from './events/discord.message.event';
import { GlobalErrorEvent } from './events/discord.error.event';

import { PrivateConfig } from './configuration/private.settings.local';

const client = new Discord.Client({
    disableEveryone: true
});

client.on('ready', async () => {
    await ClientReadyEvent.Handle(client);
});
client.on('guildCreate', async (guild) => {
    await GuildCreateEvent.Handle(guild);
});
client.on('guildDelete', async (guild) => {
    await GuildDeleteEvent.Handle(guild);
});
client.on('message', async (message) => {
    await MessageEvent.Handle(message, client.user.username, client.user.avatarURL);
});
client.on('error', async (error) => {
    await GlobalErrorEvent.Handle(error);
});
client.login(PrivateConfig.apiKey);
