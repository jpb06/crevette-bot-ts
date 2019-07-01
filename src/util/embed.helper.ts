import { RichEmbed, TextChannel } from 'discord.js';

import { ReplayDataMapper } from '../relicchunky/replay.data.mapper';
import { MapData } from '../types/internal.types';
import { Types, Util } from 'dowpro-replay-watcher-dal';
import { botConfig } from './../configuration/environment/bot.config.interface';

export class EmbedHelper {
    private static channel: TextChannel;
    private static authorName: string;
    private static authorAvatarUrl: string;

    public static Setup(
        channel: TextChannel,
        authorName: string,
        authorAvatarUrl: string
    ): void {
        this.channel = channel;
        this.authorName = authorName;
        this.authorAvatarUrl = authorAvatarUrl;
    }
    /* ---------------------------------------------------------------------------------------------------------------
       Generic
       ---------------------------------------------------------------------------------------------------------------*/
    private static GenerateGeneric(): RichEmbed {
        let embed = new RichEmbed()
            .setThumbnail('http://i.imgur.com/oBBZtML.png')
            .setTimestamp(new Date())
            .setFooter('© SaucisseNotFound Inc.', 'http://i.imgur.com/oBBZtML.png');

        return embed;
    }

    public static Error(): void {
        this.channel.send({
            embed: new RichEmbed()
                .setThumbnail('https://i.imgur.com/5L7T68j.png')
                .setTimestamp(new Date())
                .setFooter('© SaucisseNotFound Inc.', 'https://i.imgur.com/5L7T68j.png')
                .setColor(10684167)
                .setTitle('Error')
                .setDescription('An error occurred while processing your request')
        });
    }
    /* ---------------------------------------------------------------------------------------------------------------
       Describe replays
       ---------------------------------------------------------------------------------------------------------------*/
    public static populateReplayInfos(
        authorAvatarUrl: string,
        username: string,
        replayLocalPath: string,
        replayData: MapData
    ): RichEmbed {

        replayData = ReplayDataMapper.translateMapData(replayData.internalName, replayData);

        let time = this.getTime(replayData.duration);

        let embed = EmbedHelper.GenerateGeneric()
            .setColor(3447003)
            .setAuthor(`${username} uploaded a replay`, authorAvatarUrl)
            .setDescription(`**__Map__** : ${replayData.name ? replayData.name : 'Unregistered map'}\n**__Game duration__** : ${time}`)
            .attachFile(replayLocalPath);

        if (replayData.url)
            embed.setThumbnail(replayData.url);

        let slot = 1;
        let observers: Array<string> = [];

        replayData.players.forEach(player => {
            if (player.race.length === 0) {
                if (player.name.length > 0) observers.push(player.name);
            } else {
                embed.addField(`Player ${slot}`, `**__${player.name}__** : ${ReplayDataMapper.mapRace(player.race)}`);
            }
            slot++;
        });

        if (observers.length > 0) {
            embed.addField(`Observers`, `${observers.join(', ')}`);
        }

        return embed;
    }

    public static async notifyGameResult(
        game: Types.QueuedReplay
    ): Promise<RichEmbed> {

        let time = this.getTime(game.Duration);
        let folderPath = `${botConfig().gamesFilesRepositoryPath}/${game.Hash}`;
        let fileName = await Util.FileSystem.findRecFile(folderPath);
        let filePath = `${folderPath}/${fileName}`;

        let winnerName = game.Players.filter(el => el.IsAmongWinners)[0].Name;

        let mapDetails = ReplayDataMapper.getMapDetails(game.MapName);

        let embed = EmbedHelper.GenerateGeneric()
            .setColor(3447003)
            .setAuthor(`${game.Players[0].Name} vs ${game.Players[1].Name}`, '')
            .setDescription(`**__Map__** : ${mapDetails[0]}\n**__Game duration__** : ${time}\n**__Winner__** : ${winnerName}`)
            .attachFile(filePath);
        
        if (mapDetails[1])
            embed.setThumbnail(mapDetails[1]);

        let slot = 1;

        game.Players.forEach(player => {
            embed.addField(`Player ${slot}`, `**__${player.Name}__** : ${ReplayDataMapper.mapRace(player.Race)} (${player.EloRating})`);
            slot++;
        });

        return embed;
    }

    private static getTime(
        durationInSeconds: number
    ): string {

        let date = new Date();
        date.setSeconds(durationInSeconds);
        let time = date.toISOString().substr(11, 8);

        return time;
    }
}