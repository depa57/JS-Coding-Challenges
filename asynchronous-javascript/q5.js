
async function getUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);    return await res.json();
  } catch (e) {
    return 'Error';
  }
}

getUser(2).then(result => {
  console.log(result);
});