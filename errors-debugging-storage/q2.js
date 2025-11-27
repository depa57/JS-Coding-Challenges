async function  asyncErrorHandler(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        return "Failed";
    }
}

const url1 ="https://dummyjson.com/ip";
const url2 = "https://dummyjson.com/ip2"
asyncErrorHandler(url1).then(result => console.log(result));
asyncErrorHandler(url2).then(result => console.log(result));