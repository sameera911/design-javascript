var answers=[
    {id:"q1",ans:7},
    {id:"q2",ans:"Canada"},
    {id:"q3",ans:"China"},
    {id:"q4",ans:"Manilla"},
    {id:"q5",ans:"Vatican City"},
    {id:"q6",ans:"Venuzuela"},
    {id:"q7",ans:"Canberra"},
    {id:"q8",ans:"South Africa"},
    {id:"q9",ans:"Libya"},
    {id:"q10",ans:"Kenya"},

];

function result7()
{
if(document.getElementById('7').checked) { 
    document.getElementById("5").disabled="true";
    document.getElementById("4").disabled="true";
    document.getElementById("6").disabled="true";
    document.getElementById("a1").innerHTML 
        ="Correct";
    }
   
}
function result4()
{
if(document.getElementById('4').checked) { 
    document.getElementById("5").disabled="true";
    document.getElementById("7").disabled="true";
    document.getElementById("6").disabled="true";
    document.getElementById("a1").innerHTML 
        ="Wrong";
    }
}
