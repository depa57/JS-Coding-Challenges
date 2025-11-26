function arrayEditor(arr)
{
    arr.push(10);
    arr.unshift(5);
    arr.pop();
    arr.splice(1,1)
    return arr;
}
console.log(arrayEditor([2,4,5]));
