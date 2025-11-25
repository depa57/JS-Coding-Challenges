function getDayName(num)
{  
    let day;

    switch(num)
    {
        case 1:
            day = "Monday"
            break;
        case 2:
            day = "Tuesday"
            break;
        case 3:
            day = "Wednesday"
            break;
        case 4:
            day = "Thursday"
            break;
        case 5:
            day = "Friday"
        case 6:
            day = (num === 6) ?"Saturday": `${day} and Saturday`; 
            break;
        case 6:
            day = "Sunday"
            break;
        default: 
            day ="Invalid"
    }
    
    return day;
}

console.log(getDayName(3))
console.log(`Holidays : ${getDayName(5)}`)
console.log(getDayName(6))