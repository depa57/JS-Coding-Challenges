
function safeParse(jsonStr) {
  try {
    return JSON.parse(jsonStr);
  } catch (e) {
    return 'Invalid JSON';
  }
}
console.log(
    safeParse('{"city":"Balkumari"}')
); // { city: 'Kathmandu' }

console.log(
    safeParse('{city:"Balkumari"}')
); // Invalid JSON