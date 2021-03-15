var n1=211;
var n2=40;
var n3=106;
var large=0;
if((n2<n1)&(n3<n1))
{
    if(n2>n3)
    {
        console.log("The second largest number is "+n2);
    }
    else
    {
        console.log("The second largest number is "+n3);
    }
}
else if((n1<n2)&(n3<n2))
{
    if(n1>n3)
    {
        console.log("The second largest number is "+n1);
    }
    else
    {
        console.log("The second largest number is "+n3);
    }
}
else if((n1<n3)&(n2<n3))
{
    if(n1<n2)
    {
        console.log("The second largest number is "+n2);
    }
    else
    {
        console.log("The largest number is "+n1);
    }


}