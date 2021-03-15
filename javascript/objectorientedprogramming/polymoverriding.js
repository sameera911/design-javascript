class Parent
{
    phone()
    {
        console.log("have nokia phone");;
    }
}

class Child extends Parent{
    phone()
    {
        super.phone(); //super is used to call phone method of the parent
        console.log("have iphone");
    }
}

var obj=new Child();
obj.phone();
//tytu