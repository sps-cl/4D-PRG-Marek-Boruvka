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

//b

function diskriminant(a,b,c){
    return b * b - 4 * a * c;
}

function korenyKvadratickeRovnice(a,b,c){
    if (diskriminant(a,b,c) < 0) {
        console.log("Chyba: záporný diskriminant")
    }
    else{
        let x1 = (-b - Math.sqrt(diskriminant(a,b,c) /  2 * a))
        let x2 = (-b + Math.sqrt(diskriminant(a,b,c) /  2 * a))
        console.log(x1);
        console.log(x2);
    }
}

korenyKvadratickeRovnice(5,15,8);

