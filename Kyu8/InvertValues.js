function invert(array) {
   return array.map(e => -e );
}
/*
parameters: (array) array of numbers
return: new array with the inverse of all values, [0] should return -0
example: [1,2,3,4,5] => [-1,-2,-3,-4,-5,]
pseudo-code: map the array with a function that returns the negative of the integer
*/