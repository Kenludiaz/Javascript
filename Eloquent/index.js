const SCRIPTS = require('./script.js');

// function filter(array, test) {
//     let passed = [];
//     for (let element of array) {
//     if (test(element)) {
//     passed.push(element);
//     }
//     }
//     return passed;
// }
// const living = SCRIPTS.filter (script => script.living);

// // console.log(SCRIPT);

// function reduce(array, combine, start) {
//     let current = start;
//     for (let element of array) {
//     current = combine(current, element);
//     }
//     return current;
//     }
//     console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
//     // → 10
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from); //reduces the amount of characters in one script
    }, 0);
    }
    console.log(SCRIPTS.reduce((a, b) => { //code begins here
        //the array is fed with the . already, so you just need the combine
    return characterCount(a) < characterCount(b) ? b : a; //reducec the count of two scripts and returns the largest
    }));
    // → {name: "Han", ...}
    