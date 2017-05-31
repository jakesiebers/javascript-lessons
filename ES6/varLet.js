
// var vs let

function varExample(){
  var b;

  for(var a=1; a<=5; a++){
    b = (typeof b === 'undefined' ? a : b+a);
  }

  console.log(a);
  console.log(b);

}

function letExample(){

  for(let a=1; a<=5; a++){
    let b = (typeof b === 'undefined' ? a : b+a);
  }

  console.log(a);
  console.log(b);

}

varExample();
letExample();
