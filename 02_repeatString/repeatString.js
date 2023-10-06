const repeatString = function (input, noOfTimes) {

    finalValue = ''
    if (noOfTimes < 0) {
        return 'ERROR'
    }
    for (let i = 1; i <= noOfTimes; i++) {
        finalValue += input
    }
    return finalValue;
};

repeatString('hey', 5);

// Do not edit below this line
module.exports = repeatString;
