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
// function characterCount(script) {
//     return script.ranges.reduce((count, [from, to]) => {
//     return count + (to - from); //reduces the amount of characters in one script
//     }, 0);
//     }
//     console.log(SCRIPTS.reduce((a, b) => { //code begins here
//         //the array is fed with the . already, so you just need the combine
//     return characterCount(a) < characterCount(b) ? b : a; //reducec the count of two scripts and returns the largest
//     }));
//     // → {name: "Han", ...}
    
// function characterScript(code) {
//     for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => {
//     return code >= from && code < to;
//     })) {
//     return script;
//     }
//     }
//     return null;
//     }
    

//     console.log(characterScript(121));
//     // → {name: "Latin", ...}
    
// const arrOfArr = [[1,2],[2,3],[3,3,4,2]];
// // =======1-Flattening========
// let flatten = (arr) => {
//     let newArr= [];
//     newArr = arr.reduce((count, deepArr) => count.concat(deepArr));
//     return newArr;
// }
// console.log(flatten(arrOfArr));

// =======2-YourOwnLoop========

// let myLoop = (value, testFunc, updateFunc, bodyFunction) => {
//     for (let start = value; testFunc(start); start = updateFunc(start)) {bodyFunction(start)};
// }
// myLoop(3, n => n > 0, n => --n, n => console.log(n));

// =======3-Everything========
//The some function keeps iterating until it finds a true value and returns true,
//and so to implement an everything function you must iterate until you find false
//or else it retuns true; returns true if evey part of the array passes the test
let every1 = (arr, predicateFunc) => {
    for (let item of arr) {
        if (!predicateFunc(item)) 
            return false;
    }
    return true;
}
let every1some = (arr, predicateFunc) => {
    //run some
    //find the index in which it stops
    arr.some(item => {
        if (predicateFunc(item)) {
            if (arr.indexOf(item) != 0) {
                return false;
            }
        }
        return true;
    })
    //if it does not stop at the first index then it does not pass

}