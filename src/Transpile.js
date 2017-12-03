const identifierList = [
    { starters: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], identifier: "integer" },
    { starters: ["*", "+", "/", "-"], identifier: "mathsymbol" }
];

const skipList = [
    "\n", " "
]

const tokenEnd = ";";

const inArray = (array, value) => {
    return array.indexOf(value) !== -1;
}

class Token {
    constructor(identifier, value) {
        this.identifier = identifier;
        this.value = value;
    }
}

class Transpiler {
    static computeTokenData(data, startIndex, identifier) {
        let finalToken = "";
        let continueValue = startIndex - 1;

        for (let i = startIndex; i < data.length; i++) {
            const char = data[i];
            continueValue++;

            if (inArray(identifier.starters, char)) {
                if (skipList.indexOf(char) === -1) {
                    finalToken += char;
                }
            } else {
                break;
            }
        }

        return { data: finalToken, continueValue: continueValue };
    }

    static lexicallyAnalyze(data) {
        let tokens = [];

        for (let i = 0; i < data.length; i++) {
            const char = data[i];

            for (let j = 0; j < identifierList.length; j++) {
                const identifier = identifierList[j];

                if (inArray(identifier.starters, char)) {
                    let tokenData = this.computeTokenData(data, i, identifier);
                    tokens.push(new Token(identifier.identifier, tokenData.data));
                    i = tokenData.continueValue;
                }
            }
        }

        return tokens;
    }

    static run(data) {
        return { err: null, tokens: this.lexicallyAnalyze(data) };
    }
}

export { Transpiler };