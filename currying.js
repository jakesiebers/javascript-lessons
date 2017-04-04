
// currying

const incrementBy => inc => x => x + inc;

const incrementByOne = incrementBy(1);
const incrementByFive = incrementBy(5);


console.log(incrementByOne(5));
console.log(incrementByOne(10));
console.log(incrementByFive(5));
console.log(incrementByFive(10));
