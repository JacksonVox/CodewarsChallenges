var number = function(busStops){
  let numOfPassengers = 0
  busStops.forEach(bStop => numOfPassengers += (bStop[0] - bStop[1]))
  return numOfPassengers
}

/*
parameters: array of integer pairs representing number of people getting on and off the bus at each stop
return: total number of people on the bus after the last stop
example: [10,0],[3,5],[5,8] => 5
pseudo-code: declare total passengers
for each element in array, add then subtract passengers from total
return total
*/