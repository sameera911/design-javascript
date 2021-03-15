//2+22
//3+33+333
var n=4;
var sum=0;
var i=1;
var res=0;

    while(i<=n)
    {
        sum=sum*10;
        sum=sum+n;
        res=res+sum;
        i++;
    }
   
console.log("result is "+res);