function findUniq(arr) {
  const sliced = arr.slice(0,3)
  let repeatNum 
  if (sliced[0] === sliced[1]){
    repeatNum = sliced[0]
  }else if(sliced[1] === sliced[2]){
    repeatNum = sliced[1]
  }else if (sliced[0] === sliced[2]){
    repeatNum = sliced[0]
  }
  let answer = arr.filter(e => e !== repeatNum)
  return answer[0]
}