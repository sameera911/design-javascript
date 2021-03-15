// var n=123;
// //var r=0;
// var q=0;
// while(n!=0)
// {
  
//     q=n%10;
//     console.log(q);
//     n=Math.floor(n/10)
//     //n=n/10;
  

// }
// //console.log(q);


var num=123;
var res=0;
while(num!=0)
{
    var dig=num%10;
    res=res*10+dig;
    num=Math.floor(num/10);
}
console.log(res);