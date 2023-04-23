function shortcut (string) {
  const lowercaseVowels = ['a','e','i','o','u']
  return string.split('').filter(e => !lowercaseVowels.includes(e)).join('')
}
/*
parameters: (string) input string
return: new string with lowercase vowels removed from input (string), capital vowels should remain
example: "hello" => "hll"
pseudo code: define array of lowercase vowels
convert input string to array and filter elements that are not contained in lowercase vowel array
join array and return
*/