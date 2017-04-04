
// New and the prototype chain

const fakeNew = (constructorFunction, args) => {
  const result = {  __proto__ : constructorFunction.prototype };
  constructorFunction.apply(result, args);
  return result;
}


function SomeConstructor(num) {
  this.num = num;
}

SomeConstructor.prototype = {
  double(){
    return this.num*2;
  }
};


const a = new SomeConstructor(5);
const b = fakeNew(SomeConstructor, [5]);

console.log(a);
console.log(a.double());
console.log(b);
console.log(b.double());
