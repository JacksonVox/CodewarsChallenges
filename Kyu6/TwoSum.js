function twoSum(numbers, target) {
    const output = []
    for (let i = 0; i < numbers.length; i++){
      for (let j = i + 1; j < numbers.length; j++){
        if (numbers[i] + numbers[j] === target){
          output.push(i,j)
        }
      }
    }
    return output
  }
  
  
  //input (numbers) array and (target) number
  
  //return two separate indexes of array elements that sum to target number
  
  console.log([twoSum([4,6,2,3], 9)])  // [1,3]
  
  /*
  const output = []
  loop for each element of numbers i
   loop for each element of numbers j = i + 1
    if numbers[i] + numbers[j] === target
    output.push(i, j)
  return output
  
  */