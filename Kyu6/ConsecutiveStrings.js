function longestConsec(strarr, k) {
  let output = ""
  for (let i = 0; i < strarr.length - (k - 1); i++){
    let temp = ""
    for (let i2 = i; i2 < i + k; i2++){
      temp += strarr[i2]
    }
    if (temp.length > output.length){
      output = temp
    }
  }
return output
}

/*
parameters: (strarr) an array of strings and an integer (k)
return: the FIRST longest string consisting of (k) consecutive strings
example:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2
Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

pseudo-code:
loop for length of string array  - (k-1)
concatenate two consecutive strings and save in output variable if longer than current output variable
return output
*/