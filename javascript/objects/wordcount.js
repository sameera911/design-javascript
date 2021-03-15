var text="hai hello hai hello hello";
var words=text.split(" ");
var dict={};

for(let word of words)
{
    if(word in dict)
    {
        dict[word]+=1;
    }
    else
    {
        dict[word]=1;
    }
}
console.log(dict);

var elements=[]; //[[2,haiii][3,hello]] store like this as count first then key

for(let key in dict)
{
    elements.push(dict[key],key);
}

console.log(elements);
elements.sort((o1,o2)=>o2[0]-o1[0]);
console.log(elements[0]);


