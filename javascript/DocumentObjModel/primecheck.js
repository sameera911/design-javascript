//var num=document.querySelector("#txtinp").value;
function prime()
{
    var num=document.querySelector("#txtinp").value;
    var flag=0;
    for(var i=2;i<num;i++)
    {
        if(num%i==0)
        {
            flag=1;
            break;
        }
        
    }
    if(flag==0)
    {
    alert(num+" is a prime number");
    }
    else
    {
        alert(num+" is not a prime number");
    }
}

function clearBox()
{
    document.querySelector("#txtinp").value="";
}
