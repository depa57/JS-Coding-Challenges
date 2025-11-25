function createCounter() {
  let count = 0;
  return {
    increment() { 
      count += 1; 
    },
    get() {
       return count; 
      }
  };
}
const c = createCounter();
c.increment();
console.log(c.get());