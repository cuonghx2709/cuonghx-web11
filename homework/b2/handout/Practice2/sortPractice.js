'use strict'

function sort(input) {
  for(let i = 0; i < input.length; i ++){
    for(let i = 0; i < input.length - 1; i++){
      if(input[i] > input[i + 1]){
        var tmp = input[i];
        input[i] = input[i + 1];
        input[i + 1] = tmp;
      }
    }
  }
  return input;
}

module.exports = sort
