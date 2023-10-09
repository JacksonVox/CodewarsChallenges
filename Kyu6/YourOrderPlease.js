function order(words){
    if (words === ""){return ""}
    
    const numbersArr = [1,2,3,4,5,6,7,8,9]
    let wordsArr = words.split(" ")
    let output = []
    wordsArr.forEach((word) => { 
      output[(word.split("").sort()[0] -1)] = word})
    return output.join(" ")
  }