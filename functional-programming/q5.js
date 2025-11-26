function chain(arr)
{
    return arr.map((num)=>num*num).filter((num)=>num%2==0).reduce((acc,item)=>{
        acc = acc+ item;
        return acc;
    },0);
}

const nums = [1, 2, 3, 4];
console.log(chain(nums));