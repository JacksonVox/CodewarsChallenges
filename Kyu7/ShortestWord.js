function findShort(s){
    return s.split(" ").sort((a,b) => a.length - b.length)[0].length
  }
  
  
  /*
  Parameters: (s) string of words separated by spaces
  return: length of the shortest word
  example: "one five seven" => 3
  pseudo code: split string into array, sort array by element length, return length of 0 index
  */
 