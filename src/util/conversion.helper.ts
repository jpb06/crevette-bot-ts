export abstract class ConversionHelper {

    public static byteArrayToLong(
        array: Buffer
    ): number {

        let value = 0;
        for (let i = array.length - 1; i >= 0; i--) {
            value = (value * 256) + array[i];
        }

        return value;
    }

    public static uintToString(
        uintArray: Buffer
    ): string {

        const encodedString = String.fromCharCode.apply(null, uintArray);
        const decodedString = decodeURIComponent(escape(encodedString));

        return decodedString;
    }

    public static readUTF16String(
        bytes: Buffer
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