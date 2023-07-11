function expandedForm(num) {
  num = num.toString().split('')
  let numArrExpanded = num.map((e,index) => {
    let output = e
    for (let i = 1; i < num.length - index; i++){
      output += "0"
    }
  return output 
  })

  let numExpanded = `${numArrExpanded[0]}`
  for (let i = 1; i < numArrExpanded.length; i++){
    if(numArrExpanded[i] != 0){
      numExpanded += ` + ${numArrExpanded[i]}`
    }
  }
  return numExpanded
}

/*
parameters: (num) input number
return: (num) converted to "standard form"
example: (12) => "10 + 2"
(42) => "40 + 2"
pseudo-code:
convert number to string
split string to array
let numArrExpanded = num.map((e,i) => {
  let output = e
  for (let i = 0; i < num.length; i++){
    output += "0"
  }
  return output
})

let numExpanded = "numArrayExpanded[0]"
for (let i = 1; i < numArrExpanded.length; i++){
numExpanded += ` + ${numArrExpanded[i]}`
}
*/