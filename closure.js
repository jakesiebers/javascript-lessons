
// Scope/Closure

const counter = () => {

  let a = 0;

  return () => {
    a++;
    return a;
  };

}

const c = counter();
const d = counter();
console.log(c());
console.log(d());
console.log(c());
console.log(c());
console.log(c());
console.log(d());
