class Person
{
    constructor(age,name)
    {
        this.age=age;
        this.name=name;
    }
    printPerson()
    {
        console.log(this.name);
        console.log(this.age);
    }
}
var obj=new Person(25,"raj");

obj.printPerson();
//tytu