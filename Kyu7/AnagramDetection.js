// write the function isAnagram
var isAnagram = function(str1, str2) {
  let str1Arr = str1.toLowerCase().split('').sort().join('')
  let str2Arr = str2.toLowerCase().split('').sort().join('')
    return str1Arr == str2Arr
};

/*
parameters: (str1) potential anagram string, (str2) string to compare against
return: boolean
example: ("test", "estt") => true
pseudo-code:
create arrays from str1 and str2
for loop that destructs str too while looking for all characters in str1
if character is not found, return false, else return true
*/