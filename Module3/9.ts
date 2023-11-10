{

//abstraction

//-> abstract 2 vabe kora jai 1. interface use kore. 2. abstract keyword diey


//abstract using interface
//idea
interface Vehicle1 {
    startEngine() : void;
    stopEngine() : void;
    move() : void;
}

//real implementation
class Vehicle1  implements Vehicle1 { //Ekta class ekta interface k implements kore extends kore na

    startEngine(): void {
        console.log("I am starting the car");
    }

    stopEngine(): void {
        console.log("I am stopping engine");
    }
    move(): void {
        console.log("I am moving the car")
    }

    test(){
        console.log("I am testing.");
    }
}


const toyotaCar = new Vehicle1();
toyotaCar.startEngine();
toyotaCar.stopEngine();


//------------------------------------------------>

//abstract using abstract class
//abstract class er instance make kora jaina extends kore use korte hoi
//idea
abstract class  Vehicle2 {
    abstract startEngine(): void ;

    abstract stopEngine(): void;
    abstract move(): void ;
}


//abstract er moddhe j kono absctract variable ba method tahkbe se gulo kono class extend korle sei property gulo k must use korte hobe sei class e
class ToyotaCar extends Vehicle2{
    startEngine(): void {
        console.log("I am start engine");
    }

    stopEngine(): void {
        console.log("stop engine");
    }

    move(): void {
        console.log("move")
    }
}
const hondaCar = new Vehicle2();





}