//Prob 3 - Print the following details name, capital, flag using forEach function
var xhttpreq = new XMLHttpRequest();
var data;
var weather_url=[];

xhttpreq.open('GET','https://restcountries.eu/rest/v2/all',true);

xhttpreq.send(null);

 xhttpreq.onload=function(){
     //Getting all countries data
    data  = JSON.parse (this.response);
  
    //Printing the following details name, capital, flag using forEach function
    data.forEach(element => {
        console.log(" Country name " + element.name,"\n","Country Capital "+ element.capital,"\n","Country Flag "+ element.flag);
        
    });
};


    
