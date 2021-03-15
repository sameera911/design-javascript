var arr=[1,3,5,10,12];
arr.sort((o1,o2)=>o1-o2);
var flag=0;
var n=12;
for(let num of arr)
{
    if(n==num)
    {
        flag=1;
        break;

    }
}
if(flag==0)
{
    console.log("not found");

}
else{
    console.log("not found at "+);
}
//utyutyu