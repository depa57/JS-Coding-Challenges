function sumAll(...nums)
{
    let sum = 0;
    for(const num of nums)
    {
        sum+=num
    }   
    return sum;
}
console.log(sumAll(9,8,7,2,1))