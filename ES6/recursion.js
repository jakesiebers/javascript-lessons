
// recursion

const add = (a, b) => a+b;

const mult = (a, b) => (a <= 0 ? 0 : b + mult(a - 1, b));

console.log(mult(5,6));

const pow = (a, b) => (b <= 0 ? 1 : mult(pow(a, b - 1), a));

console.log(pow(2,5));
console.log(pow(9,2));
