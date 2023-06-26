function isPangram(string){
  return alphabet.every(x => string.toLowerCase().includes(x));
}

const alphabet = [...'abcdefghijklmnopqrstuvwxyz']


/*
parameters: (string) input which is a sentence
return: true or false if string is a pangram - a string which contains every letter of the alphabet at least once
example: "The quick brown fox jumps over the lazy dog" => true
pseudo code:
create object containing every letter of the alphabet as well as punctuation
convert string to lowercase to array and loop for each checking if letter exists
return false if letter not found, else return true.
*/