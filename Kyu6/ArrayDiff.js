function arrayDiff(a, b) {
  return a.filter(function(aNum){
    return b.includes(Number(aNum)) ? false : true
  })
}