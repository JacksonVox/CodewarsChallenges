/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(romanStr) {
  romanStr.split("")


  let condensedRomanStr = []
  for(let i = 0; i < romanStr.length; i++){
      if((romanStr[i] === "I" && (romanStr[i+1] === "V" || romanStr[i+1] === "X")) ||
         (romanStr[i] === "X" && (romanStr[i+1] === "L" || romanStr[i+1] === "C")) ||
         (romanStr[i] === "C" && (romanStr[i+1] === "D" || romanStr[i+1] === "M"))){
          condensedRomanStr.push(romanStr[i] + romanStr[i+1])
          i++
      }else{
          condensedRomanStr.push(romanStr[i])
      }
  }
   return condensedRomanStr.reduce((a,b) => a + romanNums[b], 0)
};

const romanNums = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900
}