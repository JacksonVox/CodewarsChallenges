function towerBuilder(nFloors) {
  let asterisk = "*"
  let space = " "
  let asteriskCount = 1
  let spaceCount = nFloors - 1
  let tower = []
  for(let i = 0; i < nFloors; i++) {
    tower.push(`${space.repeat(spaceCount)}${asterisk.repeat(asteriskCount)}${space.repeat(spaceCount)}`)
    asteriskCount += 2
    spaceCount -= 1
  }
  return tower
}

/*
parameters: (nFloors) number of floors output tower should have
return: array of strings, representing each floor of the tower sequentially from the top down.
        each "floor" should all have the same length, and the string should be composed of
        spaces and * characters to visualize the tower.
example: a tower with 3 floors should look like this
[
"  *  ",
" *** ",
"*****"
]
4 floors
[
"   *   ", 3" " 1"*" 3" "
"  ***  ", 2" " 3"*" 2" "
" ***** ", 1" " 5"*" 1" "
"*******"  0" " 7"*" 0" "
]
*/