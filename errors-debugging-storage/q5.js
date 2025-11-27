function setCookieToken() {
  const d = new Date();
  d.setTime(d.getTime() + 24*60*60*1000);
  document.cookie = `token=abc123; 
  expires=${d.toUTCString()};`;
}

setCookieToken();
