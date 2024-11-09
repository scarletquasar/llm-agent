class Tokenizer {
    static tokenize(data) {
        const tokens = data.split(' ');

        let utf8Encode = new TextEncoder();
        return tokens.map(token => utf8Encode.encode(token));
    }

    static compareTokens(token1, token2, encoding = 'utf8') {
        const token1AsString = Buffer.from(token1).toString(encoding).toLowerCase();
        const token2AsString = Buffer.from(token2).toString(encoding).toLowerCase();

        if (token1AsString === token2AsString) {
            return 100;
        }

        let normalizedToken1 = [...token1, ...new Array(100 - token1.length)];
        let normalizedToken2 = [...token2, ...new Array(100 - token2.length)];

        let equalBytesCountInOrder = 0;
        let index = 0;

        while(index < normalizedToken1.length) {
            if (normalizedToken1[index] === undefined && normalizedToken2[index] == undefined) {
                break;
            }

            if (normalizedToken1[index] === normalizedToken2[index]) {
                equalBytesCountInOrder++;
            }
            index++;
        }

        return (100 * equalBytesCountInOrder) / index;
    }
}

export { Tokenizer }