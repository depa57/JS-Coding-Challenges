function interval() {
  let i = 1;
  const id = setInterval(() => {
    console.log(i);
    if (i >= 5) 
        clearInterval(id);
    i++;
  }, 1000);
}
interval();