
// Generators

function* integersInRange(a, b) {
  console.log(`${a}-${b}`);
  while(a<=b)
    yield a++;
}

for(let x of integersInRange(2, 6)) console.log(x);
console.log();
for(let x of integersInRange(10, 15)) console.log(x);
