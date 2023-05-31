function grow(x){
  return x.reduce((a,b) => a*b)
}
/*
parameters: (x) input array of integers
return: multiple the array integers in order and return the value
example: [1,2,3,4] => 1*2*3*4 = 24
pseudo-code: use reduce function to multiply values together and return result
*/