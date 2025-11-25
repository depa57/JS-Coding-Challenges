function varScopeDemo()
{
    let name = "deepa"; 
    const address = "Balkumari"; 
    var country = "nepal";
    
    console.log(name)
    console.log(address)
    console.log(country)
    
    {
        let name = "deepa"; 
        const address = "lamjung"; 
        let isStudent ="yes";
        const gender = "female"

        console.log(name)
        console.log(address)
        console.log(country)
        console.log(isStudent)
        console.log(gender)
    }  
    
    console.log(name)
    console.log(address)
    console.log(country)
}
varScopeDemo();