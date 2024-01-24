//a
function maximum(a,b){
    if (a > b){
        return a;
    }
    else if(a === b){
        return a;
    }
    else{
        return b;
    }
}

function minimum(a,b){
    if (a < b){
        return a;
    }
    else if(a === b){
        return a;
    }
    else{
        return b;
    }
}

function maximumZeTri(a,b,c){
    let prvni = maximum(a,b);
    return maximum(prvni, c);
}

function minimumZeTri(a,b,c){
    let prvni = minimum(a,b);
    return minimum(prvni, c);
}

let max = maximumZeTri(60,2,3);
let min = minimumZeTri(1,10,50);
console.log(max);
console.log(min);

//b

function obsahPodstavy(polomer){
    return polomer * polomer * Math.PI;
}

function povrchPlasteValce(polomer, vyska){
    return 2 * Math.PI * vyska * polomer;
}

function povrchValce(polomer, vyska){
    return povrchPlasteValce(polomer, vyska) + obsahPodstavy(polomer) * 2;
}

let povrch = povrchValce(3, 7);
console.log(povrch);