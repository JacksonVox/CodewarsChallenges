function likes(names) {
  if(names.length === 1){
   return `${names[0]} likes this`
 }else if(names.length === 2){
   return `${names[0]} and ${names[1]} like this`
 }else if(names.length === 3){
   return `${names[0]}, ${names[1]} and ${names[2]} like this`
 }else if (names.length > 3){
   return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
 }else{
   return "no one likes this"
 }
}

/*
parameters:(names) array of strings of names of people who "like" something
return: a string formatted for different numbers of people liking an item.
example:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
pseudo-code:
if statements based on the length of input array
template literal returns
*/