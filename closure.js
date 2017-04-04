
// Scope/Closure

const counter = () => {

  let x = 0;

  return () => {
    x++;
    return x;
  };

}

const c = counter();
console.log(c());
console.log(c());
console.log(c());
