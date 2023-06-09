function openOrSenior(data){
  return data.map(function(person){
    if (person[0] >= 55 && person[1] > 7){
      return "Senior"
    }else{
      return "Open"
    }
  })
}

/*
parameters: (data) will be a list of pairs, an integer for age and integer for their croquet handicap
return: an array of strings denoting whether the member will be applying as "Open" or "Senior"
  if member is 55 or older AND has a handicap greater than 7, they are "Senior"
example:
[18, 20] => ["Open"]
*/