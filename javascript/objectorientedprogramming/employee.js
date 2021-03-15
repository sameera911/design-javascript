class Employee
{
    constructor(id,name,desig,salary)
    {
        this.id=id;
        this.name=name;
        this.des=desig;
        this.sal=salary;
    }
}

var ob=new Employee(100,"ravi","developer",25000);
var ob1=new Employee(101,"raj","developer",26000);
var ob2=new Employee(102,"ram","qa",25000);
var ob3=new Employee(103,"sam","qa",27000);

var employee=[];
employee.push(ob);
employee.push(ob1);
employee.push(ob2);
employee.push(ob3);

// for(let emp of employee)
// {
//     if(emp.des=="developer")
//     {//tytu
//         console.log(emp);
//     }
    
// }
// var hs;
// for(let emp of employee)//highest salary
// {
//     var hs=0;
//     if(emp.sal>hs)
//     {
//         hs=emp.sal
//        //console.log(emp);
//     }
    
// }
// console.log(hs,);

enames=employee.map(emp=>emp.name.toUpperCase());
console.log(enames);
 


employee.filter(emp=>emp.des=="developer").forEach(o=>console.log(o.name.toUpperCase()));
var highsal=employee.map(emp=>emp.sal).reduce((emp1,emp2)=>emp1>emp2?emp1:emp2);//print highest salary
console.log(highsal);

//employee.reduce((emp1,emp2)=>emp1>emp2?emp1:emp2).forEach(o=>console.log(o));

employee.sort((emp1,emp2)=>emp1.sal>emp2.sal?-1:1).forEach(o=>console.log(o));