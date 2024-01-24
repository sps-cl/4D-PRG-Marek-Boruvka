let city = "";
let Time;
let Temperature;

function addCity(){
    let velikost = document.getElementById("city");
    city = velikost.value;
    getTemperature(city);
};


function getTemperature(city){
    let url = "https://api.tomorrow.io/v4/weather/realtime?location="+ city +"&apikey=fGWD0QBGLbkTFDtWtfiyrxM1Wwi5Lmm4";
    fetch(url).then((response) =>{
        return response.json();
    }).then((data) => {
        let time = new Date(data.data.time);
        let temperature = data.data.values.temperature;
        let weatherCode = data.data.values.weatherCode;
        let humidity = data.data.values.humidity;
        let windspeed = data.data.values.windspeed;
        console.log(data);
        let label1 = document.getElementById("time");
        let label2 = document.getElementById("temperature");
        let label3 = document.getElementById("humidity");
        let label4 = document.getElementById("windspeed");
        let obrazky = document.getElementById("obrazky");
        label1.innerHTML = "Čas: " + time.toString();
        label2.innerHTML = "Teplota: " + temperature;
        label3.innerHTML = "Vhlkost: " + humidity;
        label4.innerHTML = "Rychlost větru: " + windspeed;
        switch (weatherCode) {
            case 1000:
                document.getElementById("obrazky").src="clear.png";
                break;
            case 1100:
                document.getElementById("obrazky").src="mostlyclear.png";
                break;
            case 1101:
                document.getElementById("obrazky").src="partlycloudy.png";
                break;
            case 1102:
                odocument.getElementById("obrazky").src="mostlycloudy.png";
                break;
            case 1001:
                document.getElementById("obrazky").src="cloudy.png";
                break;
            case 2000:
                document.getElementById("obrazky").src="fog.png";
                break;
            case 2100:
                document.getElementById("obrazky").src="lightfog.png";
                break;
            case 4000:
                document.getElementById("obrazky").src="drizzle.png";
                break;
            case 4001:
                document.getElementById("obrazky").src="rain.png";
                break;
            case 4200:
                document.getElementById("obrazky").src="lightrain.png";
                break;
            case 4201:
                document.getElementById("obrazky").src="heavyrain.png";
                break;
            case 5000:
                document.getElementById("obrazky").src="snow.png";
                break;
            case 5001:
                document.getElementById("obrazky").src="flurries.png";
                break;
            case 5100:
                document.getElementById("obrazky").src="lightsnow.png";
                break;
            case 5101:
                document.getElementById("obrazky").src="heavysnow.png";
                break;
            case  6000:
                document.getElementById("obrazky").src="freezingdrizzle.png";
                break;
            case 6001:
                document.getElementById("obrazky").src="freezingrain.png";
                break;
            case 6200:
                document.getElementById("obrazky").src="lightfreezingrain.png";
                break;
            case 6201:
                document.getElementById("obrazky").src="heavyfreezingrain"
                break;
            case 7000:
                document.getElementById("obrazky").src="icepellets.png";
                break;
            case 7101:
                document.getElementById("obrazky").src="heavyicepellets.png";
                break;
            case 7102:
                document.getElementById("obrazky").src="lighticepellets.png";
                break;
            case 8000:
                document.getElementById("obrazky").src="thunderstorm.png";
                break;
            default:
                document.getElementById("obrazky").src="otaznik.png";
                break;
        }

    })
}