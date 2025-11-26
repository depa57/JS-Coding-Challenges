function countWords(arr)
{
    return arr.reduce((acc,item)=>{
         acc[item] = (acc[item] || 0) + 1;
         return acc;
    },{});
}

const fruits= ["apple", "banana", "apple"];
console.log(countWords(fruits));