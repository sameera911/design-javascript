//var input=document.querySelector("#txtinp");

function clearBox()
{
    document.querySelector("#txtinp").value="";
}

function displayBox(num)
{
    document.querySelector("#txtinp").value+=num;
}
function result()
{
    let data=document.querySelector("#txtinp").value;
    let res=eval(data);
    document.querySelector("#txtinp").value=res;
}
//5ryt
function del()
{
    let data=document.querySelector("#txtinp").value;
    let res=data.slice(0,-1);
    document.querySelector("#txtinp").value=res;
}