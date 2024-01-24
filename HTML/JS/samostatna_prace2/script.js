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
        let windspeed = data.data.values.windSpeed;
        console.log(data);
        let label1 = document.getElementById("time");
        let label2 = document.getElementById("temperature");
        let label3 = document.getElementById("humidity");
        let label4 = document.getElementById("windspeed");
        label1.innerHTML = time.toString();
        label2.innerHTML = temperature;
        label3.innerHTML = humidity;
        label4.innerHTML = windspeed;
        switch (weatherCode) {
            case 1000:
                document.getElementById("obrazky").src="Obrazky-pocasi/clear.png";
                break;
            case 1100:
                document.getElementById("obrazky").src="Obrazky-pocasi/mostlyclear.png";
                break;
            case 1101:
                document.getElementById("obrazky").src="Obrazky-pocasi/partlycloudy.png";
                break;
            case 1102:
                odocument.getElementById("obrazky").src="Obrazky-pocasi/mostlycloudy.png";
                break;
            case 1001:
                document.getElementById("obrazky").src="Obrazky-pocasi/cloudy.png";
                break;
            case 2000:
                document.getElementById("obrazky").src="Obrazky-pocasi/fog.png";
                break;
            case 2100:
                document.getElementById("obrazky").src="Obrazky-pocasi/lightfog.png";
                break;
            case 4000:
                document.getElementById("obrazky").src="Obrazky-pocasi/drizzle.png";
                break;
            case 4001:
                document.getElementById("obrazky").src="Obrazky-pocasi/rain.png";
                break;
            case 4200:
                document.getElementById("obrazky").src="Obrazky-pocasi/lightrain.png";
                break;
            case 4201:
                document.getElementById("obrazky").src="Obrazky-pocasi/heavyrain.png";
                break;
            case 5000:
                document.getElementById("obrazky").src="Obrazky-pocasi/snow.png";
                break;
            case 5001:
                document.getElementById("obrazky").src="Obrazky-pocasi/flurries.png";
                break;
            case 5100:
                document.getElementById("obrazky").src="Obrazky-pocasi/lightsnow.png";
                break;
            case 5101:
                document.getElementById("obrazky").src="Obrazky-pocasi/heavysnow.png";
                break;
            case  6000:
                document.getElementById("obrazky").src="Obrazky-pocasi/freezingdrizzle.png";
                break;
            case 6001:
                document.getElementById("obrazky").src="Obrazky-pocasi/freezingrain.png";
                break;
            case 6200:
                document.getElementById("obrazky").src="Obrazky-pocasi/lightfreezingrain.png";
                break;
            case 6201:
                document.getElementById("obrazky").src="Obrazky-pocasi/heavyfreezingrain"
                break;
            case 7000:
                document.getElementById("obrazky").src="Obrazky-pocasi/icepellets.png";
                break;
            case 7101:
                document.getElementById("obrazky").src="Obrazky-pocasi/heavyicepellets.png";
                break;
            case 7102:
                document.getElementById("obrazky").src="Obrazky-pocasi/lighticepellets.png";
                break;
            case 8000:
                document.getElementById("obrazky").src="Obrazky-pocasi/thunderstorm.png";
                break;
            default:
                document.getElementById("obrazky").src="Obrazky-pocasi/otaznik.png";
                break;
        }

    })
}