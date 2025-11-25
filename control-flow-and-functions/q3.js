function reverseArray(arr) {
  const res = [];
  for (const v of arr) {
    res.unshift(v);
  }
  return res;
}
console.log(reverseArray([1,2,3]))