{

//statics 
//ekta single source/memory use kore same memory

class Counter {
    count: number = 10;

    increment(){
        return (this.count += 1);
    }

    decrement(){
        return this.count -= 1;
    }
}

const instence1 = new Counter();
console.log(instence1.increment); //different memory

const instence2 = new Counter();
console.log(instence2.increment()); // different memory

//ekhane 2 ta instence create kora hoise tarpore 2 ta instence er moddhei increment function call kora hocce kintu tader memory diff vabe mange hocce result same ase. dynamically kaj korse na




//doing the same thing using statics

//same memory use korte hole static keyword use korte hobe ebong static variable k Class name diye access korte hoi this diye access kora jaina
class Counter2 {
    static count: number = 10;

    increment(){
        return (Counter2.count += 1);
    }

    decrement(){
        return Counter2.count -= 1;
    }
    static callMe(){
        console.log("Calling static function");
    }
}

const instencex = new Counter2();
console.log(instence1.increment); //different memory

const instencey = new Counter2();
console.log(instence2.increment()); // different memory


//calling static funtion
console.log(Counter2.callMe());
}