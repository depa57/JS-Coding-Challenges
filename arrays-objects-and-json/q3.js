const firstkey = "user_id";
const secondkey = "user_name";
const thirdkey = "age";

function createUser(id, name, age)
{
    return { 
        [firstkey]: id, 
        [secondkey]: name, 
        [thirdkey]: age };
}

console.log(createUser(1, "deepa", 25))