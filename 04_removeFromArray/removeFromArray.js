const removeFromArray = function (arr, toRemove) {
    let newArray = []
    removeArgs = Array.from(arguments).sort((a, b) => a - b).splice(1)
    // removeArgs = [].slice.call(arguments)
    // console.log("To Remove: " + toRemove)
    console.log("To Remove Argument: " + removeArgs + " of type: " + typeof removeArgs)
    console.log("Argument Length: " + removeArgs.length)
    console.log(removeArgs[1])

    // arrayCounter = 0

    // for (let i = 0; i < arr.length; i++) {
    //     for (let j = 0; j < removeArgs.length; j++) {
    //         if (arr[i] === removeArgs[j]) {
    //             newArray = arr.filter(function (newArray) {
    //                 return newArray !== arr[i];
    //             })
    //         }

    //     }

    // }
    for (let i = 0; i < arr.length; i++) {
        if (removeArgs.indexOf(arr[i]) === -1) {
            newArray.push(arr[i]);
        }

    }
    return newArray;
};


// console.log(removeFromArray([1, 2, 3, 4], 3, 4))

// Do not edit below this line
module.exports = removeFromArray;
