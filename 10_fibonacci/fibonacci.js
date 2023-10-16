const fibonacci = function (index) {
    if (index < 0) {
        return "OOPS"
    }
    const value = createFibonacci(index - 1)

    return value[value.length - 1]
};

function createFibonacci(last) {
    let finalArray = [0, 1]
    for (let i = 0; i < last; i++) {
        nextIndex = i + 1
        finalArray.push(finalArray[i] + finalArray[nextIndex])
    }
    return finalArray;
}

console.log(createFibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
