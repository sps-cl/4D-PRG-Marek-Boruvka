let pole = [10, 7, 4, 3, 5, 1, 2, 6, 8, 9];

function najdi(pole, prvek) {
    for (let i = 0; i < pole.length; i++) {
        if (pole[i] === prvek) {
            return i;
        }
    }
    return -1;
}

let pozice = najdi(pole, 3);
console.log(pozice);