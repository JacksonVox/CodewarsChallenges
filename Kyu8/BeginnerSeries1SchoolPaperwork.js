function paperwork(n, m) {
    if (n < 0 | m < 0){
      return 0;
      }
    return  n * m
  }
  
  /*
  parameters: (n) number of classmates, (m) number of pages per paperwork
  return: total number pages needed for all classmates paperwork. 
  if n < 0 | m < 0 => 0
  
  example:
  (5, 5) => 25
  (0, 2) => 0
  
  pseudo code:
  if (n < 0 | m < 0){
    return 0;
    }
  return  n * m
  */