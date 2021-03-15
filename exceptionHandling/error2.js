try{
    let data=eval("10+20+&");
    console.log(data);
}

catch(err)
{
        console.log(err);
}

finally{
    console.log("Finally blocks");
   }