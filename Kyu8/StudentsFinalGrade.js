function finalGrade (exam, projects) {
  if(exam > 90 || projects > 10){
    return 100
  }else if(exam > 75 && projects >=5){
    return 90
  }else if(exam > 50 && projects >=2){
    return 75
  }else return 0
}

/*
parameters: (exam) integer representing exam grade
  (projects) integer representing number of projects completed
return: integer representing final grade.
  4 cases for final grade
    return 100 if exam > 90 && projects > 10
    90 if exam > 75 && projects >= 5
    75 if exam > 50 && projects >= 2
example: (85, 5) => 90
pseudo-code: clear use cases for returns, else 0
*/