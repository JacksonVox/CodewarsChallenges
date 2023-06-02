function tribonacci(signature,n){
  while (signature.length < n){
    signature.push(signature.at(-1) + signature.at(-2) + signature.at(-3))
  }
  return signature.slice(0, n)
}


/*
parameters: (signature) input array will always contain 3 numbers, (n) length of output array to be generated
return: if (n) == 0 => [] -- can just be slice(0,0)
else return output array which is generated to a total length (n) by summing three previous indices 
  to calculate next index. If (n) is less than current (signature) length, return output array of specified length
pseudo-code:
while signature.length < n {
signature.push(signature.at(-1) + signature.at(-2) + signature.at(-3))
}
return signature.slice(0, n-1)

*/