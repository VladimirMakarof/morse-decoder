const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const code_table = {
    ".":"10",
    "-":"11"
};

let binary_morse_table = {"**********": " "};

convertTable();
function decode(expr) {
    let result = "";
    for (let i = 0; i < expr.length; i += 10) {
        let code = expr.substr(i, 10);
        result += binary_morse_table[code];
    }

    return result;

}

function convertTable() {
    let cKey;
    for (let key in MORSE_TABLE) {
        cKey = "";
        for (let char of key) {
            cKey += code_table[char];
        }
        while (cKey.length < 10) {
            cKey = "0" + cKey;
        }
        binary_morse_table[cKey] = MORSE_TABLE[key];
    }
}

module.exports = {
    decode
}
