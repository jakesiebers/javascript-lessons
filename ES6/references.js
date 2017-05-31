
// references

const example1 = () => {

  const a = {
    key: 'value'
  };

  const b = a;

  b.key = 'value2';

  console.log(a.key);

}

const example2 = () => {

  const a = {
    key: 'value'
  };

  a.key = 'value2';

  console.log(a.key);

}

example1();
example2();
