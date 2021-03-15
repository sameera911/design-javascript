var data=[10,"hello",10.5,true];
console.log(data);
data[1]="haaiii";
console.log(data);

//add elements in the array
data.push(333);
console.log(data);

//retrieve data from the array
for(var i=0;i<data.length;i++)
{
    console.log(data[i]);
}

for(let i of data)
{
    console.log(i);
}

data.forEach(i=>console.log(i));