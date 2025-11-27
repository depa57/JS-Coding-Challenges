async function pageload()
{
    try {
        const resonse1 = await fetch("https://jsonplaceholder.typicode.com/posts?_page=1");
        const page1 = await resonse1.json();

        const resonse2 = await fetch("https://jsonplaceholder.typicode.com/posts?_page=2");
        const page2 = await resonse2.json();

        const combined = [...page1, ...page2];

        return combined;
    } catch (error) {
        console.error("Error occur:", error);
    }
}

pageload().then(result => 
    console.log(result));