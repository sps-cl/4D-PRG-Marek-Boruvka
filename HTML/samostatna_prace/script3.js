//a
let pole = Array(300);
for (let i = 1; i < pole.length; i++) {
    pole[i-1] = i * 3;
}
let soucet = 0;

pole.forEach(element => {
    element * 3;
    soucet += element;
});

console.log(soucet);

//b

let pole1 = [3, 6, 9, 12, 15, 18, 21];
let pole2 = [7, 14, 21, 28, 35, 42, 49, 56, 63];

let nasobeni1 = pole1[0];
for (let i = 1; i < pole1.length; i++) {
    nasobeni1 *= pole1[i]
}
console.log(nasobeni1);

let nasobeni2 = pole2[0];
for (let i = 1; i < pole2.length; i++) {
    nasobeni2 *= pole2[i]
}
console.log(nasobeni2);



