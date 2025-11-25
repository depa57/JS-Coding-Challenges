function truthyFilter(arr) {
  const res = [];
  for (const v of arr) {
    if (v) res.push(v);
  }
  return res;
}

console.log(truthyFilter([null, "hello", 1]))