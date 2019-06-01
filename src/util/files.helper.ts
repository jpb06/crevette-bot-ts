import axios from 'axios';
import * as fs from 'fs-extra';

export abstract class FilesHelper {

    public static async Append(
        path: string,
        content: string
    ): Promise<void> {
        await fs.appendFile(path, content);
    }

    public static async saveFromUrlUsingHttps(
        url: string,
        dest: string
    ): Promise<void> {
        const response = await axios.get(url, {
            responseType: 'arraybuffer'
        });
        const data = response.data;

        await fs.writeFile(dest, data);
    }

    public static async delete(
        path: string
    ): Promise<void> {
        await fs.remove(path);
    }

}