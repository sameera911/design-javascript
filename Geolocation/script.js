
//***** using XMLHTTPRequest object

// function displayCountryData()
// {
//     //  alert("jghhdfgdhg");
//     var ctry=document.querySelector("#cname").value;
//     var req=new XMLHttpRequest();
//     req.open("get",`https://restcountries.eu/rest/v2/name/${ctry}`);
//     req.send();
    
    

//     req.onreadystatechange=()=>
//     {
//         if(req.readyState==4)
//         {
//             if((req.status>=200)&(req.status<300))
//             {
//                 let data=JSON.parse(req.responseText);
//                 var name=data[0].name;
//                var flag=data[0].flag;
//                var pop=data[0].population;
//                var capital=data[0].capital;
//                var curr=data[0].currencies[0].name;
//                let html_data="";
//                html_data+=`
//                <div class="card" style="width: 25rem;">
//                 <img src="${flag}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h2 class="card-title">Country name:${name}</h2>
//                     <h3>population:${pop}</h3>
//                     <h3>capital:${capital}</h3>
//                     <h3>currency:${curr}</h3>
                                    
//                 </div>
//                 </div>`
//                document.querySelector("#ctrydet").innerHTML=html_data;


//             if((ctry=="IND")|(ctry=="INDIA"))
//             {
//                    var name=data[1].name;
//                    var flag=data[1].flag;
//                    var pop=data[1].population;
//                    var capital=data[1].capital;
//                    var curr=data[1].currencies[0].name;
//                    let html_data="";
//                    html_data+=`
//                    <div class="card" style="width: 25rem;">
//                     <img src="${flag}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                         <h2 class="card-title">Country name:${name}</h2>
//                         <h3>population:${pop}</h3>
//                         <h3>capital:${capital}</h3>
//                         <h3>currency:${curr}</h3>
                                        
//                     </div>
//                     </div>`
//                    document.querySelector("#ctrydet").innerHTML=html_data;
//             }
//             }
//         }
//     }
// }



//********using fetch

function displayCountryData()
 {
        var ctry=document.querySelector("#cname").value;

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
                
            if((ctry=="IND")|(ctry=="INDIA")|(ctry=="India")|(ctry=="india"))
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
