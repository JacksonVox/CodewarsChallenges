function nbDig(n, d) {
  let arrSq = []
  let counter = 0
  
  for (let i = 0; i <= n; i++){
    arrSq.push(i*i)
  }
  arrSq.forEach(function(num) {
    const numArr = Array.from(num.toString()).map(Number)
    numArr.forEach(function(digit){
      if (digit === d){
        counter++
      }
    })
    })
    return counter
  }
  


/*
parameters integer(n) and digit(d)
square all numbers between 0 and n
return the count of digit(d) in all squares

example: n = 4, d = 1
squares 0, 1, 9, 16
return 2 (2 "1"s represented in the squares)

pseudo code:
declare array
declare digit counter variable

loop array created from squares and n
for each item of array toString and split, then look for digit
if found, counter++
return counter

*/