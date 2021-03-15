//to find sum factors of a num from the array

// var arr=[1,2,3,4];
// var num=6;
// for(var i=0;i<arr.length;i++ )
// {
//     for(var j=i+1;j<arr.length;j++)
//     {
//         if(arr[i]+arr[j]==num)
//         {
//             console.log(arr[i],arr[j]);
//             //break;
//         }
//         // else{
//         //     console.log("not found");
//         // }
//     }
// }

// var arr=[1,2,3,4];
// var num=4;

// for(var i=0;i<=arr.length;i++)
// {
//     d=num-arr[i];
    
//     for(var j=0;j<=arr.length;j++ )
//     {
//         if((arr[i]==arr[j]))
//         {
//             break;
//         }
//         else if(d==arr[j])
//         {
//             console.log(arr[j],arr[i]);
//         }  
//     } 
//     // if(d!=arr[i])
//     // {
//     //     console.log("Not found in the array");
//     // }
// }

var arr=[1,2,3,4,5];
var num=6;
var low=0;
var upp=arr.length-1;
while(low<upp)
{
    let total=arr[low]+arr[upp];
    if(total==num)
    {
        console.log(arr[low],arr[upp]);
        //break;
        low=low+1;
    }
    else if(total<num)
    {
        low=low+1;
    }
    else
    {
        upp=upp-1;
    }
}
