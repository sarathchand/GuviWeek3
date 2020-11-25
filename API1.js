//Prob 1 - Get all the countries from Asia continent using Filter function

var xhttpreq = new XMLHttpRequest();
var data;
var weather_url=[];

xhttpreq.open('GET','https://restcountries.eu/rest/v2/all',true);

xhttpreq.send(null);

 xhttpreq.onload=function(){
     //Getting all countries data
    data  = JSON.parse (this.response);
    //Getting all data of countries where region is ASIA
    const Countries_filterted_Fulldata = data.filter((variable)=>variable.region=='Asia')

    //Getting all COuntry names from filtered data where region is ASIA
    const Country_names=Countries_filterted_Fulldata.map(variable=>variable.name);

    //Printing COuntry names to console
    console.log(Country_names);
};


    
