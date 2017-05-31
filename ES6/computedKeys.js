
// computed object keys

// see generators
function* integersInRange(a, b) {
  console.log(`${a}-${b}`);
  while(a<=b)
    yield a++;
}

const someObject = k => ({
  [`twice${k}`]: k*2
});

// see map
for(let x of integersInRange(5, 10)) console.log(someObject(x));
