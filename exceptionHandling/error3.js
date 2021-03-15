var age=17;
try{
    if (age<18)
    {
        throw new Error("Invalid age");//customised exception made by us... 'Error' is a constructor
    }
}
catch(err){
    console.log(err.message);
}