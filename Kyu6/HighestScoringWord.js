function high(string){
  
  const scoreCard = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  
  const stringArr = string.split(' ')
  
  function scoreLetter(letter){
    return scoreCard.findIndex(l => l === letter)+1
  }
  
  const wordScoreArr = stringArr.map(function(word){
    let score = 0
    word.split('').forEach(l => score += scoreLetter(l))
    return score
  })
  
  const wordHighScore = wordScoreArr.reduce((a,b) => a >= b ? a : b)
  
  return stringArr[wordScoreArr.findIndex(e => e === wordHighScore)]
}