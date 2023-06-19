function digPow(n, p){
  let nArr = String(n).split('').map(Number)
  let numSumPowers = 0
  for(let i = 0; i < nArr.length; i++){
    numSumPowers += nArr.at(i) ** (p+i)
  }
  return Number.isInteger(numSumPowers / n) ? numSumPowers / n : -1
}

/*
parameters: (n) number, (p) starting exponent
return : if there is a positive integer that when multiplied by n
          is equal to the sum of the digits of n taken to successive powers of p
          more of a math problem than a coding problem...
example: 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
return: let nArr = String(n).split('').map(Number)
        let numSumPowers = 0
        for(let i = 0; i < nArr.length; i++){
          numSumPowers += nArr.at[i+1] ** (p+i)
        }
*/