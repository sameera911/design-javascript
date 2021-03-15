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
      html_data+=`<option value=${obj.name}>${obj.name}</option>`;

      }
      document.querySelector("#optctry").innerHTML=html_data;
    }

    function displayCountryData()
    {
           var ctry=document.querySelector("#optctry").value;
   
           fetch(`https://restcountries.eu/rest/v2/name/${ctry}`)
          .then((resp)=>resp.json())
          .then((data)=>populateData(data))
         // .catch((err)=>console.log(err))
   
       function populateData(data)
       {
                   var name=data[0].name;
                   var flag=data[0].flag;
                   var pop=data[0].population;
                   var capital=data[0].capital;
                   var curr=data[0].currencies[0].name;
                   let html_data="";
                   html_data+=`
                   <div class="card" style="width: 25rem;">
                       <img src="${flag}" class="card-img-top" alt="...">
                       <div class="card-body">
                           <h2 class="card-title">Country name:${name}</h2>
                           <h3>population:${pop}</h3>
                           <h3>capital:${capital}</h3>
                           <h3>currency:${curr}</h3>
                                           
                       </div>
                       </div>`
                   document.querySelector("#ctrydet").innerHTML=html_data;
                   
               if((ctry=="IND")|(ctry=="INDIA"))
               {
                      var name=data[1].name;
                      var flag=data[1].flag;
                      var pop=data[1].population;
                      var capital=data[1].capital;
                      var curr=data[1].currencies[0].name;
                      let html_data="";
                      html_data+=`
                      <div class="card" style="width: 25rem;">
                       <img src="${flag}" class="card-img-top" alt="...">
                       <div class="card-body">
                           <h2 class="card-title">Country name:${name}</h2>
                           <h3>population:${pop}</h3>
                           <h3>capital:${capital}</h3>
                           <h3>currency:${curr}</h3>
                                           
                       </div>
                       </div>`
                      document.querySelector("#ctrydet").innerHTML=html_data;
               }
              
       }
    }


