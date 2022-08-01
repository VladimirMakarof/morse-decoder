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

function parseToMorse(str) {
    let strReplace = str.replace(/00/g,'');
    strReplace = strReplace.replace(/10/g,'.');
    strReplace = strReplace.replace(/11/g,'-');
    return strReplace;
}

function decode(expr) {
    let result = '';
    let delStr = String(expr);
    let arrayOfString = [];

    let indexChar = 0;
    while (delStr.length>=10) {
        let subStr = delStr.slice(indexChar, indexChar + 10);
        if (subStr === '**********') {
            subStr = ' ';
        }
        arrayOfString.push(subStr);
        delStr = delStr.slice(10, delStr.length);        
    }

    for (let index = 0; index < arrayOfString.length; index++) {
        if (arrayOfString[index] != ' ') {
            arrayOfString[index] = parseToMorse(arrayOfString[index]);  
        }      
    }
    
    for (let index = 0; index < arrayOfString.length; index++) {
        if (arrayOfString[index] != ' ') {
            result += MORSE_TABLE[arrayOfString[index]];
        }
        else {
            result += ' ';
        }
        
    }
    
    return result;
}

module.exports = {
    decode
}

//console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"))
