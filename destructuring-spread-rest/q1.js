function pickElements(arr) {
  const [first, , third = 0] = arr;
  return { first, third };
}
console.log(pickElements([1,2,3]))