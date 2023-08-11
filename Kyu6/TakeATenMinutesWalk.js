function isValidWalk(walk) {
  function walkEqual(arr,d1,d2){
    return arr.filter(e => e === d1 || e === d2)
            .map(function(e){ 
              if (e === d1){
                return 1
              }else if (e === d2){
                return -1
               }
              })
            .reduce((a,b) => a + b, 0)
  }
  if (walk.length === 10){
    if (walkEqual(walk,'n','s') === 0 && walkEqual(walk,'w','e') === 0){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}