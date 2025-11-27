async function createPost(title, body)
{
    try
    {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                                method: 'POST',
                                body: JSON.stringify({
                                    title: title,
                                    body: body,
                                    userId: 4,
                                }),
                                headers: {
                                    'Content-type': 'application/json; charset=UTF-8',
                                },
                                });
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.error("Error occur:", error);
    }
}

createPost("deepa","gurung")
.then(result => console.log(result));