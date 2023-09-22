function makeString(s){
  return s.split(' ')
    .map(word => word[0])
    .join('')
}
/*
parameters: string of words separated by spaces
return: string with the first character of each word
example: "sees eyes xray yoat" => "sexy"
pseudo-code:
let output
split string into array by spaces
map first character of each item to new array
join array and return
*/