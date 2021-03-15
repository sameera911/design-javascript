var arr=[10,11,12,10,12,13];
var num=10;
var len=arr.length;
//console.log(len);
console.log(arr);
for(let i=0;i<len;i++)
{
    if(arr[i]==num)
    {
        for(let j=i;j<len;j++)
        {
            arr[j]=arr[j+1];
        }
        arr[len-1]=num;
    }
    
}

console.log(arr);
//utu