{

//polymorphism

class Person{
    getSleep(){
        console.log("I am sleeping for 8 hours per day");
    }
}

class Student extends Person{
    getSleep(){
        console.log("I am sleeping for 7 hours per day");
    }
}

class Developer extends Person{
    getSleep(){
        console.log("I am sleeping for 5 hours per day");
    }
}



const getSleepingHour = (param: Person) => { //Person class k type hisbe use krchi
    param.getSleep();
}
const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();


getSleepingHour(person1);

//----------------------------------------------------->
//another example

class Shape {
    getArea() : number{
        return 0;
    }
}

class Circle extends Shape{
    //polymorphism e method er vetor e overwrite kora jai kintu method er parameter change kora jaina
    redius : number;
    constructor(radius: number){
        super();
        this.redius = radius;
    }

    getArea() : number {
        return Math.PI * this.redius * this.redius;
    }
}

class Rectangle extends Shape{
    height: number;
    width: number;
    constructor(height: number, width: number){
        super();
        this.height = height;
        this.width = width;
    }

    getArea() : number {
        return this.height * this.width;
    }
}


const getShapeArea = (param: Shape) => {
    console.log(param.getArea())
}

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(20,30);


getShapeArea(shape1);
getShapeArea(shape2);
getShapeArea(shape3);

//ekta method kei bar bar use kortesi overwrite kore.
}