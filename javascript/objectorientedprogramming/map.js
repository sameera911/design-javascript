var arr=[2,4,6,8,7,3];
// function square(num1)
// {
//     return num1**2;
// }

var sum=arr.reduce((num1,num2)=>num1+num2);
console.log(sum);


arr.forEach(o=>console.log(o)); //each element 

var res=arr.map(num1=>num1**2);
console.log(res);

var data=arr.filter(num=>num%2==0);
console.log(data);
