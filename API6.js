//Prob 6 -  Print the country which use US Dollars as currency
var xhttpreq = new XMLHttpRequest();
var data;
var weather_url = [];

xhttpreq.open('GET', 'https://restcountries.eu/rest/v2/all', true);

xhttpreq.send(null);

xhttpreq.onload = function () {
    //Getting all countries data
    data = JSON.parse(this.response);
  


    //Getting the data countries in ASIA region using filter
    const Dollar_data = data.filter(element => {

        //Finding if any of the countries currency is dollar

        const condition = element.currencies.some((item) => {
            return item.symbol == "$";
        })
        if (condition) {
            return element;
        }
    }
    );

    //Getting Countries name from extracted data using filter
    const Dollar_Countries = Dollar_data.map(element=>element.name);

    //Printing countries array
    console.log(Dollar_Countries);




};