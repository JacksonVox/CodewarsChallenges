function factorial(n)
{
  if(n === 0){
    return 1
  }else if(n < 0 || n > 12){
    throw new RangeError("The argument must be between 0 and 12.")
  }else{
    let productNum = 1
    for (n; n > 0; n--){
      productNum *= n
    }
    return productNum
  }
}

/*
parameters(n) number input
return factorial of n which is the product of all positive integers up to 
  and including n, by convention if n = 0 => 1
  if input is below 0 or greater than 12 throw RangeError
example (5) => 5*4*3*2*1 = 120
pseudo code
if n = 0 return 1
else if n < 0 or > 12 return RangeError
else return output from loop that multiplies product (initial value 1) * (n), n-1, repeat until n === 0
*/