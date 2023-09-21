function solve(s){
  let vowels = 'aeiou';
   let longest = 0;
   let current = 0;
 
   for (let i = 0; i < s.length; i++) {
     if (vowels.includes(s[i])) {
       current++;
       longest = Math.max(longest, current);
     } else {
       current = 0;
     }
   }
 
   return longest;
 }
 