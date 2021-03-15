// var arr=[4,5,6,1,2,3];
// arr.sort((no1,no2)=>(no1-no2));//ascending
// console.log(arr);

// arr.sort((no1,no2)=>no1<no2?-1:1);//ascending 
// console.log(arr);

// var=[10,11,12,10,13]
// num=10;
// print num in rightside of the Array

// var arr1=[2,5,6,3,1,8,9,12,4];
// console.log(arr1);
// var arr2=[];
// arr2.push(arr1.sort((no1,no2)=>no1<no2?-1:1));
// console.log(arr2);

var arr1=[2,5,6,8,12,23,45];
arr1.sort((no1,no2)=>(no1-no2));//if array is non-sorted array.
var num=6;
var l=0;
var len=arr1.length;
var u=len-1;

var position=binarysearch(arr1,l,u,num);
if(typeof position==undefined)
{
    console.log("The number not found in the sorted array");
}
else
{
console.log("The number found at "+position+"th position");
}


function binarysearch(arr1,l,u,num)
{
    //l=0;
    //u=len-1;
    
    while(l<=u)
    {
        var m=(l+u)/2;
        if(num==arr1[m])
        {
            return m;
        }
        else if(num<arr1[m])
        {
            
            u=m-1;
        }
        else if(num>arr1[m])
        {
            l=m+1;
            
        }
    }
}
