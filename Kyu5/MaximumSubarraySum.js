var maxSequence = function(arr){
  if( arr === [] || arr.every(num => num < 0) ){
    return 0
  }
  let sum = 0
  let arrShift = [...arr]
  for(let i = 0; i < arr.length; i++){
    let arrPop = [...arrShift]
    for(let i = 0; i < arrShift.length; i++){
      if( arrPop.reduce((a,b) => a + b, 0) > sum ){
        sum = arrPop.reduce((a,b) => a + b, 0)
      }
        arrPop.pop()
      }
      arrShift.shift()
    }
  return sum
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// 6
  
/*
parameters: input array of positive or negative integers, or empty array
return: max sum from any contiguous sub array, if array all negative or empty return 0
example: [2,-3,4,5,-1,-2,7,-3] => 13 ([4,5,-1,-2,7])
pseudo-code:
if array === [] || array.every(num => num < 0) => 0
create destructible array variable arrShift
create sum variable
[loop for length of array
[inner loop for length of arrShift
create destructible array variable arrPop
reduce sum and store if greater than global sum variable
pop last element
]
shift first element
]
return sum
*/