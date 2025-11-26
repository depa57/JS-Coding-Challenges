function addAsync(a, b)
{
    return new Promise(resolve => {
        setTimeout(() => resolve(a + b), 1000);
    });
}

addAsync(8,2)
    .then(
        result => 
            console.log(result)
    );