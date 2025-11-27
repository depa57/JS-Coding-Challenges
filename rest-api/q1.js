async function getUsers(url)
{
    try
    {
        const response = await fetch(url);
        const data = await response.json();
        return data.map(user => user.name);
    }
    catch(error)
    {
        console.error("Error fetching users:", error);
    }
}
getUsers(
    "https://jsonplaceholder.typicode.com/users")
    .then(result => console.log(result));