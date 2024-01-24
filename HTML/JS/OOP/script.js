class Counter{

    *[Symbol.iterator](){
        let current = this.count;
        while(current > 0){
            yield current;
            current--;
        }
    }

    constructor(count){
        this.count = count;
    }
}

let counter = new Counter(10);

for (const value of counter) {
    console.log(value);
}

class Vector2{
    constructor(X,Y){
        this.x = X;
        this.y = Y;
    }

    add(other){
        this.x += other.x;
        this.y += other.y;
    }
}
let name = "newAttribute";

class Vector3 extends Vector2 {
    [Symbol.iterator](){
        
    }

    get X(){
        return this.x;
    }
    get Y(){
        return this.y;
    }
    get Z(){
        return this.z;
    }

    get Size(){
        return this.size;
    }

    set X(value){
        this.x = value;
    }

    #size;


    constructor(X, Y, Z) {
        super(X,Y);
        this.z = Z;
        this.size = Math.sqrt(this.x**2 + this.y**2 + this.z**2);
        this[name] = 3;
    }



    add (other) {
        super.add(other);
        this.z += other.z;
    }
}


let bod = new Vector3(1,2,3)
bod[name] = 3;
bod.X = 3;
console.log(bod);