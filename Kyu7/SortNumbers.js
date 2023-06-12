function solution(nums){
  if (nums == null){
    return []
  }else{
    return nums.sort((a,b) => a - b)
  }
}

/*
parameters: (nums) input array of integers
return: if (nums) is an empty array or null return empty array
  else return array sorted least to greatest
example: [3,7,2] => [2,3,7]
pseudo-code:
if nums === [] || null
  return []
else return nums.sort((a,b) => a + b)
*/