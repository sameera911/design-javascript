var employee={
    eid:101,
    ename:"Raj",
    desig:"SE",
    salary:30000
}

// if(employee.gender=="")
// {
//     console.log("Not found");
// }
console.log(employee.salary);

employee.salary+=5000;

if("gender" in employee)
{
    console.log("exist");
}
else{
    console.log("Not exist");
}
//tytu
employee.gender="male";

console.log(employee);