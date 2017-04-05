
// var vs let

function varExample(){

  for(var a=1; a<=5; a++){
    var b = (typeof b === 'undefined' ? a : b+a);
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
