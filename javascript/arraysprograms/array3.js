var arr1=[10,12,13,14,15];
var arr2=[8,9,10,11,12,16];
// for(i=0;i<arr1.length;i++)
// {
//     for(j=0;j<arr2.length;j++)
//     {
//         if(arr1[i]==arr2[j])
//         {
//             console.log(arr1[i]);
            
//         }
        
//     }
// }

var p1=0;
var p2=0;
while((p1<arr1.length) & (p2<arr2.length))
{
    if(arr1[p1]==arr2[p2])
    {
        console.log(arr1[p1]);
        p1+=1;
        p2+=1;
    }
    else if(arr1[p1]>arr2[p2])
    {
        p2+=1;
    }
    else
    {
        p1+=1;
    }

}