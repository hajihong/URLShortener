class Base62 {
    static async encodeToBase62(num) {
    var base62set = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    if (num === 0) {
        return 0;
    }
    while (num > 0 ) {
        result = base62set[num % 62] + result;
        num = Math.floor( num / 62); 
    }
    return result;
    };
}

module.exports = Base62;