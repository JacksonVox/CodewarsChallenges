function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length)
  };
  
  /*
  parameters: array of strings
  return: array of strings sorted from shortest to longest
  example: ["Beg", "Life", "I", "To"] => ["I", "To", "Beg", "Life"]
  pseudo-code:
  sort array by a.length - b.length
  */