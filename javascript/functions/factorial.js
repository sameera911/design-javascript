

function factorial(num)
{
    var fact=1;
    for(var i=1;i<=num;i++)
    {
    
    fact=fact*i;
    }
    return fact;
}

var f=factorial(5);
console.log(f);//tytu