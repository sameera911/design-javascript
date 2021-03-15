class Parent
{
    bike()
    {
        console.log("have passion pro");
    }
}

class Child extends Parent
{
    car()
    {
        console.log("child has Audi");
    }

}

class SubChild extends Child
{
    house()
    {
        console.log("child has house");
    }

}

var sb=new SubChild();
sb.bike();
sb.car();
sb.house();

var ch=new Child();
ch.car();
ch.bike();

var pr=new Parent();
pr.bike();
