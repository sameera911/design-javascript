var ck=document.querySelector("#clk");
ck.addEventListener("click",()=>
{
    ck.textContent="Clicked"
    ck.style.color="red";
})


var dck=document.querySelector("#dclk");
dck.addEventListener("dblclick",()=>
{
    
    dck.style.color="blue";
    dck.textContent="double Clicked"
})

var mo=document.querySelector("#movr");
mo.addEventListener("mouseover",()=>
{
    mo.style.color="violet";
    mo.textContent="mouse currently over me"
})

mo.addEventListener("mouseout",()=>
{
    mo.style.color="purple";
    mo.textContent="mouse currently not over me"
})