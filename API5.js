//Prob 5 - Print the total population of countries in Asia continent using reduce and filter function
var xhttpreq = new XMLHttpRequest();
var data;
var weather_url=[];

xhttpreq.open('GET','https://restcountries.eu/rest/v2/all',true);

xhttpreq.send(null);

 xhttpreq.onload=function(){
     //Getting all countries data
    data  = JSON.parse (this.response);

  
    //Getting the data countries in ASIA region using filter
    const Asia_Countries = data.filter(element=>element.region=='Asia');

    //Getting total population of countries in ASIA region extracted
    const population = Asia_Countries.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue.population;

},0);
console.log(population);

};






    
