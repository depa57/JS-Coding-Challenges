function extract(arr)
{
    let {firstName: name, address :{ city }}= arr
    console.log(`Name: ${name}, City:${city}`);
}

let user = { firstName: "deepa", address: { city: "Balkumari"}};
extract(user);