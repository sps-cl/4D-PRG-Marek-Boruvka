class Nepritel{
    constructor(jmeno){
        this.jmeno = jmeno;
    }

    utok(){
        return this.jmeno + " zaútočil";
    }
}

class Skret extends Nepritel{
    utok(){
        return super.utok() + " mečem";
    }
}

class Drak extends Nepritel{
    utok(){
        return super.utok() + " ohňěm"
    }
}

let skret = new Skret("Azog");
let drak = new Drak("Šmak");

console.log(skret.utok());
console.log(drak.utok());