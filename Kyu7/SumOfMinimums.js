function sumOfMinimums(arr) {
    return arr.map(subArr => subArr.sort((a,b) => a - b)[0]).reduce((acc, curr) => acc + curr, 0)
  }
  
  /*
  Parameters: nested array of numbers
  return: sum of the minimum of each nested array element
  example: [[2,4,5], [5,6,7], [1,9,2]] => 8
  pseudo code:
  sort nested arrays, map to new array of first index only, sum new array
  */