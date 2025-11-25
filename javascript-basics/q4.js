function divide(a,b){
    const na = Number(a);
    const nb = Number(b);
    if(Number.isNaN(na) || Number.isNaN(nb) || nb === 0)
        return 'Invalid';
    return na/nb;
}

console.log(divide(6,0));
console.log(divide(6,3));
console.log(divide(6,''));