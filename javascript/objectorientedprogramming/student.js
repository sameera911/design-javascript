class Student
{
    static college="luminar";
    constructor(rno,name,course)
    {
        this.rnum=rno;
        this.name=name;
        this.course=course;
   }
    printStudent()
    {
        console.log(this.rnum+" "+this.name+" "+this.course+" "+Student.college);
    }
}

var st=new Student(100,"rahul","bca");
st.printStudent();

var st1=new Student(101,"raj","bca");
st.printStudent();

//console.log(Student.college); //outside or inside, static variable access using classname

