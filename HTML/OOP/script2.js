class Vektor {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  
    secti(vektor) {
      let x = this.x + vektor.x;
      let y = this.y + vektor.y;
      let z = this.z + vektor.z;
  
      return new Vektor(x, y, z);
    }
  }

let vektory = [];

for (let i = 1; i <= 100; i++) {
  let x = i;
  let y = i;
  let z = i;

  let vektor = new Vektor(x, y, z);
  vektory.push(vektor);
}

let soucet = vektory[0];

for (let i = 1; i < vektory.length; i++) {
  soucet = soucet.secti(vektory[i]);
}

console.log(soucet);