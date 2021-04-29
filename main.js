"use strict";

// Created a Map 
const numbersMap = new Map([
    ["0", "Zero"],
    ["1", "One"],
    ["2", "Two"],
    ["3", "Three"],
    ["4", "Four"],
    ["5", "Five"],
    ["6", "Six"],
    ["7", "Seven"],
    ["8", "Eight"],
    ["9", "Nine"]
]);


// This method contains no Array
/*
// Using process.argv to return an array
const userNumbers = process.argv.slice(2), writtenNumbers = userNumbers.map(number => {
    let name = "";
    for (const digit of number.split(""))
        name += numbersMap.get(digit);

    return name;
});

console.log(writtenNumbers.join(","));
*/

// toDigits function has an Array
function toDigits (integers) {
    // Integer Array
    const intArray = [];

    for (const n of integers) {
        const stringified = n.toString(10);
        let name = "";

        for (const digit of stringified)
            name += numbersMap.get(digit);
        intArray.push(name);
    }
    console.log(intArray.join());
}

// process.argv to parse command line arguments
const integers = process.argv.slice(2);
// Calling the function
toDigits(integers);