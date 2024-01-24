let pole = [3, 2, 4, 3, 5, 2, 3, 7, 3, 7];

function nahradit(pole, pred, po){
    for (let i = 0; i < pole.length; i++) {
        if (pole[i] === pred) {
            pole[i] = po;
        }
    }
}

nahradit(pole,3,7);
console.log(pole);