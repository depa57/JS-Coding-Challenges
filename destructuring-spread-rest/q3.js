function sum(...nums) {
  return nums.reduce(
    (a,b)=>a+b,0);
}
console.log(sum(9,4,2))