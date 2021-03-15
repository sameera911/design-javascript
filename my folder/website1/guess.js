function listCountry()
{
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then((resp)=>resp.json())
    .then((data)=>displayClist(data))
    .catch((err)=>console.log(err.message)) 
}

function displayClist(data)
    {
      var html_data="";
      for(let obj of data)
      {
      html_data+=`<li>
           <img src=${obj.flag}  style="height: 100px; width: 150px; border: solid 2px white;"></li>
           <input type="text" id="${obj.name}">
           <button type="button" class="btn btn-warning"
            onclick="checkCountryName('${obj.name}','document.getElementById(#${obj.name}).value')"
           
           
           >Check</button><br><br>`;

      }
      document.querySelector("#optctry").innerHTML=html_data;
    }

   
    function checkCountryName(cname,txtdata)
    {
     //alert(txtdata);
        
        if(cname==txtdata)
        {
            alert("You are right!!!");
        }
        else if(txtdata=="")
        {
            alert("Enter a country name and try again!!");
        }
        else{
            alert("You are wrong! The country name is "+cname+"..... Try again!!!");
        }

    }
   
