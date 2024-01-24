class Dum{


    constructor(plochaDomu, plochaPozemku, pocetPokoju){
        this.plochaDomu = plochaDomu;
        this.plochaPozemku = plochaPozemku;
        this.pocetPokoju = pocetPokoju;
    }

    vypisAtributy(){
        console.log("plocha Domu: " + this.plochaDomu + "\n plocha Pozemku: " + this.plochaPozemku + "\n pocet Pokoju: " + this.pocetPokoju);
    }
}

let domy = [];

for (let i = 0; i < 10; i++) {
  let plochaDomu = Math.floor(Math.random() * 100) + 1;
  let plochaPozemku = Math.floor(Math.random() * 1000) + 1;
  let pocetPokoju = Math.floor(Math.random() * 10) + 1;

  let dum = new Dum(plochaDomu, plochaPozemku, pocetPokoju);
  dum.vypisAtributy();

  domy.push(dum);
}

console.log(domy);