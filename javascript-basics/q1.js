// Q1 Type Checker
function checkTypes(values) {
  return values.map(v => typeof v);
}
console.log(
    checkTypes([1, "a", true, null, undefined]))
