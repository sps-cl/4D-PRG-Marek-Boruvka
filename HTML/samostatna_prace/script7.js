let pole = [3, 2, 4, 3, 5, 2, 3, 7, 3, 7];
let counter = 0;

function pocetVyskytu(pole, prvek){
    pole.forEach(element => {
        if (element === prvek){
            counter++;
        }
    });
    return counter;
}

let vysledek = pocetVyskytu(pole,3);
console.log(vysledek);