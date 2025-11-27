function setlocalstorage() {
  const obj = { theme: 'dark', logged: true };
  localStorage.setItem('app', JSON.stringify(obj));
  sessionStorage.setItem('app', JSON.stringify(obj));
}

setlocalstorage(); 
const result = JSON.parse(localStorage.getItem('app'));
console.log(result.theme); 

