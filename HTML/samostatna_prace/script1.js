//a

function obsahPodstavy(polomer){
    return polomer * polomer * Math.PI;
}

function povrchPlasteKuzele(polomer, vyska){
    return Math.PI * vyska * polomer;
}

function povrchKuzele(polomer, vyska){
    return povrchPlasteKuzele(polomer, vyska) + obsahPodstavy(polomer);
}

let povrch = povrchKuzele(3, 7);
console.log(povrch);

//b

function Maximum(a,b){
    if (a > b) {
        console.log(a);
    }
    else{
        console.log(b);
    }
}

function MaximumZPeti(a,b,c,d,e){
    let pole = [a,b,c,d,e];
    console.log(Math.min(...pole))
    console.log(Math.max(...pole))
}