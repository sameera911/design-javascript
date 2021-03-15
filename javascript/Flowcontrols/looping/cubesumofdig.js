//123=1^3+2^3+3^3

var n=143;
var sum=0;
var r;
while(n!=0)
    {
        
        r=n % 10;
        sum=sum+r*r*r;
        n=Math.floor(n/10);
        
    }
console.log(sum);