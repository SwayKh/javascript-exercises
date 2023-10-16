const palindromes = function (args) {
    const alphabetsAndNumbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
        "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

    const argWithoutSymbols = Array.from(args.toLowerCase()).filter(letter => {
        return alphabetsAndNumbers.includes(letter);
    })

    if (argWithoutSymbols.slice().reverse().join('') == argWithoutSymbols.join('')) {
        return true;
    } else {
        return false;
    }

};

// console.log(palindromes('asjdnvasdkjf'))

// Do not edit below this line
module.exports = palindromes;
