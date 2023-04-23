function rentalCarCost(d) {
  if (d < 3){
    return d * 40
  }else if (d < 7){
    return (d * 40) - 20
  }else{
    return (d * 40) - 50
  }
}

/*
parameters:(d) days of car rental
return: cost of car rental
taking into account days rented and special discounts. 3 or more days 20$ off, 7 or more days 50$ off
daily rental fee is $40
example: 4 days = 40*4 - 20 => 140
pseudo-code:
if (d) < 3 return $40 * (d)
else if (d) < 7 return $40 * (d) - 20
else if (d) >= 7 return $40 * d - 50
*/