/// <binding BeforeBuild='clean, useDevConfig' AfterBuild='generatePackage, createReplaysFolder, zip' Clean='clean' />
const gulp = require('gulp');

const zipUtil = require('./build-logic/zip.util.js');
const fsUtil = require('./build-logic/fs.util.js');
const deployCommands = require('./build-logic/deploy.commands.js');

var pckg = require('./package.json');

gulp.task('useDevConfig', async () => {
    await fsUtil.useDevConfig();
});

gulp.task('clean', async () => {
    await fsUtil.cleanDist();
});

gulp.task('generatePackage', async () => {
    await fsUtil.generatePackage();
});

gulp.task('createReplaysFolder', async () => {
    await fsUtil.createReplaysFolder();
});

gulp.task('zip', async () => {
    await zipUtil.zipDirectory('./dist', `./release/crevettebot_${pckg.version}.zip`);
});

gulp.task('deploy', async () => {
    await fsUtil.cleanDist();

    await fsUtil.useProdConfig();

    await fsUtil.generatePackage();

    await deployCommands.build();

    await fsUtil.createReplaysFolder();

    await zipUtil.zipDirectory('./dist', `./release/crevettebot_${pckg.version}.zip`);

    await deployCommands.sendFileToDeployServer();

    return deployCommands.deploy();

});