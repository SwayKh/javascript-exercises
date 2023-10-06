const reverseString = function (word) {
    let inputArray = String(word).split('');
    let reverseArray = inputArray.reverse();
    return reverseArray.join('')
    // return inputArray.reverse().join()
};


// Do not edit below this line
module.exports = reverseString;
