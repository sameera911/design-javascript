// polymorphism
// 1.method overloading
// 2.method overriding
class Maths
{
    add(num)
    {
        console.log("1st method");
    }
    add(num1,num2)
    {
        console.log("2nd method");
    }
    add(num1,num2,num3)
    {
        console.log("3rd method");
    }
}
var mat=new Maths();
mat.add(10);
mat.add(10,20);
mat.add(10,20,30);
//tytu
