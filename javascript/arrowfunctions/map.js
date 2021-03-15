var arr=[2,4,6,8,7,3];
// function square(num1)
// {
//     return num1**2;
// }
//var data=arr.map(square); OR
arr.sort((o1,o2)=>o1>o2?-1:1).forEach(o=>console.log(o));

//arr.forEach(o=>console.log(o)); //each element line by line print

var res=arr.map(num1=>num1**2); //res is an array to copy the result
console.log(res);

var data=arr.filter(num=>num%2==0);//""
console.log(data);
