let pole = [10, 7, 4, 3, 5, 1, 2, 6, 8, 9];

function prohod(index1, index2){
    let pomoc = pole[index1];
    pole[index1] = pole[index2];
    pole[index2] = pomoc;
}

prohod(3,9);
console.log(pole);