function  filterAdults(users)
{
    return users.filter( user => user.age>= 18);
}

const user = [
    {name:"A", age:15}, 
    {name:"B", age:25}
];

console.log(filterAdults(user));
