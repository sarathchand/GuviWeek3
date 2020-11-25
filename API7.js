//Prob 6 -  Print the country which use US Dollars as currency

// 1. Create a new XMLHttpRequest object
var xhttpreq = new XMLHttpRequest();
var data;
var weather_url = [];

// 2. Configure it: GET-request for the URL

xhttpreq.open('GET', 'https://restcountries.eu/rest/v2/all', true);

// 3. Send the request over the network and catch exception if any
try{
    xhttpreq.send();
    

}
catch(exception)
{
    console.log('Exception Occured ' + exception );
}


xhttpreq.onload = function () {
    if(xhttpreq.status!=200)
    {
        console.log('HTTP Status Code Not equal to 200')
        console.log(xhttpreq.status,xhttpreq.statusText);

    }
    else{
        console.log(xhttpreq.status,xhttpreq.statusText);
    }
   
    data = JSON.parse(this.response);
    console.log(data);
 
}

//On error occured
xhttpreq.onerror = function(){
    console.log('Error Occured');
}

