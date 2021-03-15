var n1=111;
var n2=401;
var n3=166;
if((n2<n1)&(n3<n1))
{
    console.log(n1);
    if(n2>n3)
    {
       // console.log("The second largest number is "+n2);
        console.log(n2);
        console.log(n3);
    }
    else
    {
        //console.log("The second largest number is "+n3);
        console.log(n3);
        console.log(n2);
    }
}
else if((n1<n2)&(n3<n2))
{
    console.log(n2);
    if(n1>n3)
    {
        //console.log("The second largest number is "+n1);
        console.log(n1);
        console.log(n3);
    }
    else
    {
        //console.log("The second largest number is "+n3);
        console.log(n3);
        console.log(n1);
    }
}
else if((n1<n3)&(n2<n3))
{//tytu
    console.log(n3);
    if(n1<n2)
    {
        //console.log("The second largest number is "+n2);
        console.log(n1);
        console.log(n2);
    }
    else
    {
       // console.log("The largest number is "+n1);
       console.log(n2);
        console.log(n1);
    }


}