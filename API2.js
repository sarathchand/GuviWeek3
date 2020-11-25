//Prob 2 - Get all the countries with population of less than 2 lacs using Filter function
var xhttpreq = new XMLHttpRequest();
var data;
var weather_url=[];

xhttpreq.open('GET','https://restcountries.eu/rest/v2/all',true);

xhttpreq.send(null);

 xhttpreq.onload=function(){
     //Getting all countries data
    data  = JSON.parse (this.response);
  
    //Getting all data of countries with population of less than 2 lacs
    const Countries_filterted_Fulldata = data.filter((variable)=>variable.population < 200000)

    //Getting all country names from filtered data where  population is less than 2 lacs
    const Country_names=Countries_filterted_Fulldata.map(variable=>variable.name);

    //Printing country names to console
    console.log(Country_names);
};


    
