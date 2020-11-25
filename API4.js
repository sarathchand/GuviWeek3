//Prob 4 - Print the total population of countries using reduce function
var xhttpreq = new XMLHttpRequest();
var data;
var weather_url=[];

xhttpreq.open('GET','https://restcountries.eu/rest/v2/all',true);

xhttpreq.send(null);

 xhttpreq.onload=function(){
     //Getting all countries data
    data  = JSON.parse (this.response);

  
    //Getting the total population of countries using reduce function
const population = data.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue.population;

},0);
console.log(population);

};






    
