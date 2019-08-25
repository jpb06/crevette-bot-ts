import { RichEmbed, TextChannel } from 'discord.js';
import { Types as RelicChunkyTypes } from 'relic-chunky-parser';

import { ReplayDataMapper } from '../relicchunky/replay.data.mapper';
import { Types, Util } from 'dowpro-replay-watcher-dal';
import { botConfig } from './../configuration/environment/bot.config.interface';
import { AlreadyExistingGameData, AlreadyExistingGamePlayer } from 'dowpro-replay-watcher-dal/typings/types/business.types';

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

    public static Error(
        description?: string
    ): void {
        if (description === undefined) description = 'An error occurred while processing your request';

        this.channel.send({
            embed: new RichEmbed()
                .setThumbnail('https://i.imgur.com/iBjq4wt.png')
                .setTimestamp(new Date())
                .setFooter('© SaucisseNotFound Inc.', 'http://i.imgur.com/oBBZtML.png')
                .setColor(10684167)
                .setTitle('Error')
                .setDescription(description)
        });
    }

    public static GameAlreadyAddedError(
        mapName: string,
        mod: string,
        dateAdded: string,
        players: Array<AlreadyExistingGamePlayer>
    ): void {
        let playersDescription = players.map(el => `- **__${el.name}__** ${ReplayDataMapper.mapRace(el.race)} ${el.isAmongWinners ? '(Winner)' : ''}`).join('\n');

        this.channel.send({
            embed: new RichEmbed()
                .setThumbnail('https://i.imgur.com/iBjq4wt.png')
                .setTimestamp(new Date())
                .setFooter('© SaucisseNotFound Inc.', 'http://i.imgur.com/oBBZtML.png')
                .setColor(10684167)
                .setTitle('This game was already added to the ladder')
                .setDescription(`**__Map__** : ${mapName}\n**__Mod__** : ${mod}\n**__Date added__** : ${dateAdded}\n\n${playersDescription}`)
        });
    }
    /* ---------------------------------------------------------------------------------------------------------------
       Describe replays
       ---------------------------------------------------------------------------------------------------------------*/
    public static populateReplayInfos(
        authorAvatarUrl: string,
        username: string,
        replayLocalPath: string,
        replayData: RelicChunkyTypes.MapData
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
        let fileName = await Util.findRecFile(folderPath);
        let filePath = `${folderPath}/${fileName}`;

        let winnerName = game.Players.filter(el => el.IsAmongWinners)[0].Name;

        let mapDetails = ReplayDataMapper.getMapDetails(game.MapName);

        let embed = EmbedHelper.GenerateGeneric()
            .setColor(3447003)
            .setAuthor(`${game.Players[0].Name} vs ${game.Players[1].Name}`, '')
            .setDescription(`**__Mod__** : ${game.ModName} ${game.ModVersion}\n**__Map__** : ${mapDetails[0]}\n**__Game duration__** : ${time}\n**__Winner__** : ${winnerName}`)
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

        let h = Math.floor(durationInSeconds / 3600);
        let m = Math.floor((durationInSeconds - (h * 3600)) / 60);
        let s = durationInSeconds - (h * 3600) - (m * 60);

        let hours = h.toString().padStart(2, '0');
        let minutes = m.toString().padStart(2, '0');
        let seconds = s.toString().padStart(2, '0');
        let time = `${minutes}:${seconds}`;

        return h > 0 ? `${hours}:${time}` : time;
    }
}