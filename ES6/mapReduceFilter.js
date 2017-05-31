
// map / reduce / filter

const data = [1, 2, 3, 4, 5];

const double = arr => arr.map(a => a * 2);
const sum = arr => arr.reduce((total, num) => total + num, 0);
const greaterThanThree = arr => arr.filter(a => a > 3);


//console.log(double(data));
//console.log(sum(data));
//console.log(greaterThanThree(data));
//console.log(greaterThanThree(double(data)));
//console.log(double(greaterThanThree(data)));
