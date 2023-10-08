const sumAll = function () {
    let twoArgs = Array.from(arguments);
    let totalNumbers = (twoArgs[0] + twoArgs[1]);
    let sum = 0;
    console.log(typeof twoArgs[0] + " and " + typeof twoArgs[1])

    if (twoArgs[0] < 0 || twoArgs[1] < 0) {
        return 'ERROR'
    }
    else if (typeof twoArgs[0] == 'number' && typeof twoArgs[1] == 'number') {
        for (let i = 0; i < totalNumbers; i++) {
            sum += i
        }
        return sum
    }
    else {
        return 'ERROR'
    }


};

console.log(sumAll(123, "1"));

// Do not edit below this line
module.exports = sumAll;
