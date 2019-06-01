export abstract class ConversionHelper {

    public static byteArrayToLong(
        array: Buffer
    ): number {

        let value : number = 0;
        for (let i = array.length - 1; i >= 0; i--) {
            value = (value * 256) + array[i];
        }

        return value;
    }

    public static uintToString(
        uintArray: Buffer
    ): string {

        let encodedString: string = String.fromCharCode.apply(null, uintArray);
        let decodedString: string = decodeURIComponent(escape(encodedString));

        return decodedString;
    }

    public static readUTF16String(
        bytes: Buffer,
        bigEndian: boolean
    ): string {
        let data = '';

        for (let i = 0; i < bytes.length; i += 2) {
            data +=
                String.fromCharCode(
                    ConversionHelper.byteArrayToLong(bytes.slice(i, i + 1))
                );
        }

        return data;
    }
}