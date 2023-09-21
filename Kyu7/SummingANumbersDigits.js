function sumDigits(number) {
  return Math.abs(number)
    .toString()
    .split('')
    .map(num => parseInt(num))
    .reduce((a,b) => a + b, 0)
}

/*
parameters: input number
return: sum of the absolute value of each of the number's decimal digits
example: 10 => 1, 99 => 18
pseudo code:
split number into array
return array reduce of Math.abs(a) + Math.abs(b)

*/