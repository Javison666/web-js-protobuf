class ConvertTool {
    constructor() { }
    // Uint8Array 转 String
    public static uint8ArrayToStr(array: any): any {
        let out, i, len, c;
        let char2, char3;

        out = "";
        len = array.length;
        i = 0;
        while (i < len) {
            c = array[i++];
            switch (c >> 4) {
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                    // 0xxxxxxx
                    out += String.fromCharCode(c);
                    break;
                case 12: case 13:
                    // 110x xxxx   10xx xxxx
                    char2 = array[i++];
                    out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                    break;
                case 14:
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    char2 = array[i++];
                    char3 = array[i++];
                    out += String.fromCharCode(((c & 0x0F) << 12) |
                        ((char2 & 0x3F) << 6) |
                        ((char3 & 0x3F) << 0));
                    break;
            }
        }
        return out;
    }
    // Uint8Array转数值(自定义)
    public static uint8ArrayToNumber(uint8Array: any): any {
        let arr = [];
        for (let i = 0; i < uint8Array.length; i++) {
            arr.push(Number(uint8Array[i]).toString(16))
        }
        return this.hex2int(arr.join(''))
    }
    // 16进制转10进制
    public static hex2int(hex: any): any {
        var len = hex.length, a = new Array(len), code;
        for (var i = 0; i < len; i++) {
            code = hex.charCodeAt(i);
            if (48 <= code && code < 58) {
                code -= 48;
            } else {
                code = (code & 0xdf) - 65 + 10;
            }
            a[i] = code;
        }

        return a.reduce(function (acc: any, c: any) {
            acc = 16 * acc + c;
            return acc;
        }, 0);
    }
    // 字符串转Uint8Array
    public static strToUint8Array(str: any): any {
        let rawLength = str.length;
        let array = new Uint8Array(new ArrayBuffer(rawLength));
        for (let i = 0; i < rawLength; i++) {
            array[i] = str.charCodeAt(i);
        }
        return array;
    }
    // 字符串转指定位数的Uint8Array
    public static strToUint8ArrayLen(str: any, len: any): any {
        let array = new Uint8Array(len);
        const start = len - str.length;
        for (let i = start; i < len; i++) {
            array[i] = str.charCodeAt(i);
        }
        return array;
    }
    public static numToUint8ArrayLen(num: any, len: any): any {
        let array = new Uint8Array(len);
        let str = Number(num).toString(16);
        str = str.length % 2 === 0 ? str : '0' + str;
        let start = len - str.length/2;
        for(let i = start; i < len; i++){
            array[i] = this.hex2int(str.substr((i-start)*2,2));
        }
        return  array;
    }
    // 自动根据string/number返回uint8Array
    public static autoToUint8ArrayLen(val: any, len: any): any {
        if(typeof val === "number"){
            return this.numToUint8ArrayLen(val,len);
        }
        if(typeof val === "string"){
            return  this.strToUint8ArrayLen(val,len);
        }
    }
}
export default ConvertTool