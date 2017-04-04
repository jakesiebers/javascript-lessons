
// context

const printContextExample = () => {

  function printContext(){
    console.log(this);
    console.log(arguments);
  }

  printContext(1, 2, 3);
  printContext.call({ key: 'value' }, 1, 2, 3);

}

// see references
const arrowFunctionExample = () => {

  function keyPrinterMaker(){
    return () => console.log(this.key);
  }

  const a = {
    key: 'value'
  };
  const printKey = keyPrinterMaker.call(a);
  printKey();
  a.key = 'value2';
  printKey();

}
