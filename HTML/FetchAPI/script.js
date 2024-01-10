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
        let label1 = document.getElementById("label1");
        let label2 = document.getElementById("label2");
        label1.innerHTML = "Time: "+ time.toString();
        label2.innerHTML = "Temperature: " + temperature;
    })
}