export abstract class BotSettings {

    public static prefix = "!";
    public static defaultChannel = "bots-n-nuts";
    public static adminChannel = "admin";
    public static replaysChannels = [
        "replays_official_release",
        "test-version-room",
        "crevette-bot-tests",
        "2_vs_2_replays"
    ];
    public static downloadsFolder = "downloadedReplays";
}