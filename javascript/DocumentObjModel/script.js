var tag= document.getElementsByTagName("h1");
for(let hd of tag)
{
    hd.style.color="red";
}

var lst=document.getElementsByTagName("li");
for(let item of lst)
{
    item.style.color="yellow";
}


var ht=document.getElementById("hone");
ht.style.color="pink";

var lt=document.getElementsByClassName("lone");
for(let item of lt)
{
    item.style.color="violet";
}


var heads=document.querySelectorAll("h1");
for(let hd of heads)
{
    hd.style.color="green"
}

var hone=document.querySelector("#hone");
hone.style.color="blue";