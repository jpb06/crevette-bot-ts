import * as crypto from 'crypto';
import * as fs from 'fs-extra';
import * as zlib from 'zlib';
import * as path from 'path';
import { Transform, TransformOptions } from 'stream';

import { botConfig } from './../configuration/environment/bot.config.interface';

function getCipherKey(
    password: string
): Buffer {
    return crypto.createHash('sha256').update(password).digest();
}

export async function decryptFile(
    filePath: string,
    password: number[]
): Promise<void | string> {

    return new Promise((resolve, reject) => {
        // First, get the initialization vector from the file.
        const readInitVect = fs.createReadStream(filePath, { end: 15 });

        let initVect: any;
        readInitVect.on('data', (chunk) => {
            initVect = chunk;
        });
        readInitVect.on('error', (err: Error) => {
            reject(err.message);
        });

        // Once we’ve got the initialization vector, we can decrypt the file.
        readInitVect.on('close', () => {
            const cipherKey = Buffer.from(password);

            const readStream = fs.createReadStream(filePath, { start: 16 });
            const decipher = crypto.createDecipheriv('aes256', cipherKey, initVect);
            const writeStream = fs.createWriteStream(filePath + '.clear');

            readStream
                .pipe(decipher)
                .pipe(writeStream);

            writeStream.on('error', (err: Error) => {
                reject(err.message);
            });
            writeStream.on('close', () => {
                resolve();
            });
        });
    });
}

export async function encryptFile(
    filePath: string,
    password: string
): Promise<void | Error> {

    return new Promise((resolve, reject) => {
        // Generate a secure, pseudo random initialization vector.
        const initVect = crypto.randomBytes(16);

        // Generate a cipher key from the password.
        const cipherKey = Buffer.from(botConfig().CryptoKey);

        const readStream = fs.createReadStream(filePath);
        const gzip = zlib.createGzip();
        const cipher = crypto.createCipheriv('aes256', cipherKey, initVect);
        const appendInitVect = new AppendInitVect(initVect, {});
        // Create a write stream with a different file extension.
        const writeStream = fs.createWriteStream(path.join(filePath + ".node.enc"));

        readStream
            //.pipe(gzip)
            .pipe(cipher)
            .pipe(appendInitVect)
            .pipe(writeStream);

        readStream.on('error', (err) => {
            reject(err);
        });
        readStream.on('close', () => {
            resolve();
        });

    });
}

class AppendInitVect extends Transform {
    private initVect: Buffer;
    private appended: boolean;

    constructor(
        initVect: Buffer,
        opts: TransformOptions
    ) {
        super(opts);
        this.initVect = initVect;
        this.appended = false;
    }

    _transform(
        chunk: any,
        encoding: string,
        callBack: Function
    ) {
        if (!this.appended) {
            this.push(this.initVect);
            this.appended = true;
        }
        this.push(chunk);
        callBack();
    }
}