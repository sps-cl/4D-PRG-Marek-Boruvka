//a
let pole = Array(300);
let prumer = 0;
for (let i = 0; i < pole.length; i++) {
    pole[i] = Math.random() * 300;
    prumer += pole[i];
}


console.log(Math.min(...pole));
console.log(Math.max(...pole));
console.log(prumer / 300);

//b
let pole2 = [1, 7, 9, 11, 17, 21, 27];
pole2.forEach(element => {
    for (let i = 1; i < 10; i++) {
        console.log(element*i);
    }
});