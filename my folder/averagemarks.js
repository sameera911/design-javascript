class Student
{
    constructor(sno,name,m1,m2,m3)
    {
        this.snum=sno;
        this.name=name;
        this.mark1=m1;
        this.mark2=m2;
        this.mark3=m3;
   }
}
var st1=new Student(101,"Sam",50,53,85);
var st2=new Student(102,"Syam",90,91,95);
var st3=new Student(103,"Sachin",80,93,75);
var st4=new Student(104,"Ajay",82,91,99);
var st5=new Student(105,"Ram",30,45,25);

var student=[];
student.push(st1);
student.push(st2);
student.push(st3);
student.push(st4);
student.push(st5);

for(let st of student)
{
        var total=st.mark1+st.mark2+st.mark3;
        var avg=Number(total)/3;
        if(avg>90 & avg<=100)
        {
            grade='A+';
            st.Grade=grade;
        }
        else if(avg>80 & avg<=90)
        {
            grade='A';
            st.Grade=grade;
        }
        else if(avg>70 & avg<=80)
        {
            grade='B';
            st.Grade=grade;
        }
        else if(avg>60 & avg<=70)
        {
            grade='C';
            st.Grade=grade;
        }
        else if(avg<60)
        {
            grade='D';
            st.Grade=grade;
        }
        console.log(st);
    
}



   