let pole = new Array(10);
var prumer = 0;
for (let i = 0; i < pole.length; i++) {
    pole[i] = Number(prompt("Zadej hodnotu"));
    prumer += pole[i];
}
console.log(Math.min(...pole));
console.log(Math.max(...pole));
console.log(prumer / pole.length);