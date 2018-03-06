'use strict'

function generate(testLengthArray){
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
  var arr = [];
  for(var i = 0; i < testLengthArray.length ; i++){
    var input = [];
    var randomnnumber = Math.floor((Math.random() * 20000) - 9999); // -10000 -> 10000
    for(var j = 0; j < testLengthArray[i]; j ++){
      input.push(randomnnumber);
      randomnnumber += Math.floor((Math.random() * 10) + 1);
    }
    var target;
    var output;
    

    if(testLengthArray.length >= 4){
      switch(i){
        case 0:{
          target = input[0];
          break;
        }
        case 1:{
          target = input[input.length - 1];
          break;
        }
        case 2:{
          target = input[0] - 100;
        }
        case 3:{
          output = Math.floor((Math.random() * (input.length - 2)) + 1)
          target = input[output];
        }

        default :{
          target = Math.floor((Math.random() * (input[input.length - 1] - input[0])) - input[0] + 1);
          break;
        }
      }
    }else{
      target = Math.floor((Math.random() * (input[input.length - 1] - input[0])) - input[0] + 1);
    }

    output = input.indexOf(target);
    var obj = {"input": input, "target" : target, "output": output};
    arr.push(obj);
  }

  return arr;
}

module.exports = generate
