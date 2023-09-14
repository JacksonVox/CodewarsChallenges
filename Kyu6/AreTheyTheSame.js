function comp(array1, array2){
  if(!Array.isArray(array1) || !Array.isArray(array2)){
    return false
  }
  array1.sort((a,b) => a-b)
  array2.sort((a,b) => a-b)

  let results = array1.map((element,index) => array2[index] === Math.pow(element, 2))
  return results.every(element => element === true) || false
}