
function displayCountryData()
 {
     
        var ctry=document.querySelector("#cname").value;
        var btnshow=document.querySelector("#show");
        if(btnshow.innerHTML=="Show")
            {
                document.querySelector("#show").innerHTML="Reset";
               
            }
            else if(btnshow.innerHTML=="Reset")
            {
                document.querySelector("#show").innerHTML="Show";
                document.querySelector("#cname").value="";
            }
        //dfsf
        if(ctry=="")
        {
            alert("Enter a country name and try again...");
            document.querySelector("#ctrydet").style.display="none";
            document.querySelector("#show").innerHTML="Show";
            
        }
        else{
        fetch(`https://restcountries.eu/rest/v2/name/${ctry}`)
       .then((resp)=>resp.json())
       .then((data)=>populateData(data))
      // .catch((err)=>console.log(err))
        }
 }

    function populateData(data)
    {
        var ctry=document.querySelector("#cname").value;
       
          var name=data[0].name;
                var flag=data[0].flag;
                var pop=data[0].population;
                var capital=data[0].capital;
                var curr=data[0].currencies[0].name;
                let html_data="";
                html_data+=`
                <div class="card" id="cd"  style="width: 300px; height:350px">
                    <img src="${flag}" class="card-img-top" alt="...">
                    <div class="card-body" style="width: 300px; height:300px">
                        <h4 class="card-title">Country name:${name}</h4>
                        <h6>population:${pop}</h6>
                        <h6>capital:${capital}</h6>
                        <h6>currency:${curr}</h6>
                                        
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

    function myfFunction() {
        var dots = document.getElementById("fdots");
        var moreText = document.getElementById("fmore");
        var btnText = document.getElementById("myfBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more..."; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less..."; 
          moreText.style.display = "inline";
        }
      }

    function mysFunction() {
        var dots = document.getElementById("sdots");
        var moreText = document.getElementById("smore");
        var btnText = document.getElementById("mysBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more..."; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less..."; 
          moreText.style.display = "inline";
        }
      }

      
      function mytFunction() {
        var dots = document.getElementById("tdots");
        var moreText = document.getElementById("tmore");
        var btnText = document.getElementById("mytBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more..."; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less..."; 
          moreText.style.display = "inline";
        }
      }