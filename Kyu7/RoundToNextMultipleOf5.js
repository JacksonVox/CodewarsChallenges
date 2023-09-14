function roundToNext5(n){
  if (n % 5 === 0){
    return n;
  }else{
    n += 1;
    return roundToNext5(n);
  }
}

/*
parameters: integer(n)
return: rounded up multiple of 5
example: 3 => 5
  12 => 15
pseudo-code: if n % 5 === 0, return n
else n += 1
roundTonext5(n);
*/