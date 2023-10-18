const findTheOldest = function (peopleArray) {
    const age = peopleArray.map(people => {
        if (!people.yearOfDeath) {
            const d = new Date()
            people.yearOfDeath = d.getFullYear();
        }
        people["age"] = people.yearOfDeath - people.yearOfBirth
        return people
    })

    const oldestAge = age.sort((a, b) => {
        if (a.age > b.age) {
            return 1
        } else {
            return -1
        }
    })

    return oldestAge[oldestAge.length - 1]

    // return age.sort()[age.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
