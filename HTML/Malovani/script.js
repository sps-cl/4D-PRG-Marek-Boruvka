let barva = document.getElementById("color");
barva.addEventListener("change", nastavBarvu);

let platno = document.createElement("canvas");
platno.width = 900;
platno.height = 600;
document.body.appendChild(platno);

let kontext = platno.getContext("2d");

kontext.lineWidth = 10;

kontext.lineCap = "round";
kontext.strokeStyle = "blue";

let startX = 0;
let startY = 0;
let maluj = false;

platno.addEventListener("mousedown", function(event){
    let rect = platno.getBoundingClientRect();
    startX = event.clientX - rect.x;
    startY = event.clientY - rect.y;
    maluj = true;
});

platno.addEventListener("mouseup", function(event){
    maluj = false;
});

platno.addEventListener("mousemove", function(event){
    if (maluj)
    {
        let rect = platno.getBoundingClientRect();
        let x = event.clientX - rect.x;
        let y = event.clientY - rect.y;
        kontext.beginPath();
        kontext.moveTo(startX, startY);
        kontext.lineTo(x, y);
        kontext.stroke();
        startX = x;
        startY = y;
    }
});

function nastavBarvu(){
    kontext.strokeStyle = barva.value;
}

function smazPlatno(){
    kontext.clearRect(0,0, platno.width, platno.height);
}

let velikost = document.getElementById("velikost");
velikost.addEventListener("change", zmenVelikost);

function zmenVelikost(){
    kontext.lineWidth = velikost.value;
}