export interface MapData {
    name: string;
    internalName: string;
    url: string;
    players: Array<PlayerData>;
    duration: number;
}

export interface PlayerData {
    name: string;
    race: string;
}

export interface playerChunk {
    nextPlayerChunkPos: number;
    player: PlayerData;
}

export interface ActionChunk {
    pos: number;
    timestamp: number;
}