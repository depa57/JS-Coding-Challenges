async function FetchUrls(url) {
     try {
        const [usersRes, postsRes] = await Promise.all([
            fetch(url.getUsers),
            fetch(url.getPosts)
        ]);

        const [users, posts] = await Promise.all([
            usersRes.json(),
            postsRes.json()
        ]);

        const combined = [...users, ...posts];
        console.log(combined);
    } catch (error) {
        console.error("Error while fetching...");
    }
}

const url = {
    getUsers: "https://jsonplaceholder.typicode.com/users",
    getPosts: "https://jsonplaceholder.typicode.com/posts"
};

FetchUrls(url);