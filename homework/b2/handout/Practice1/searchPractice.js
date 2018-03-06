'use strict'

function search(input, target) {

  for(var index = 0; index < input.length; index++){
    // console.log(input[i]);
    if(input[index] == target){
      return index;
    }
  }
  return -1;
}

module.exports = search
