function correct(string)
{
	const transCorrection = {
    5: "S",
    0: "O",
    1: "I"
  }
  return string.split("").map(e => {
    if (!isNaN(e)) {
      return transCorrection[e] || e;
    } else {
      return e;
    }
  }).join("");
}
/*
parameters:(string) input of string with numerals in place of some letters
return: corrected string with numerals replaced with correct letter
example:
"H1 TH0R" => "HI THOR"
pseudo-code:
declare object with correction translation
transCorrection = {
5: "S",
0: "O",
1: "I"
}
correctedStr = string.split("").map(e => {
if (typeOf(e) === "Number"){
return transCorrection[e]
}else{
return e
}
})

*/