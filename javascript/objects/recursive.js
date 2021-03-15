var text="ABABAB";
//var letters=text.split();
var dict={}
for(let ch of text)//without split each character of the text will get in 'ch'
{
    if(ch in dict)
    {
        console.log("Recursive is "+ch);
        break;
    }
    else{
        dict[ch]=1;
    }
}