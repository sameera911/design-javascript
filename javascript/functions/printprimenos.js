function printprime(lowlim,upplim)
{
    
    for(var i=lowlim;i<=upplim;i++)
    {
        var flag=0;
        for(var j=2;j<i;j++)
        {
            if(i%j==0)
            {
                flag=1;
            }
            break;
        }
        if(flag==0)
        {
            console.log(i);
        }
    }
}

printprime(3,50);