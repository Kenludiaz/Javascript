function greaterThan(n) {
    return m => m > n;
}
console.log(greaterThan(3));

let greaterThanThree = greaterThan(3);

console.log(greaterThanThree(4))