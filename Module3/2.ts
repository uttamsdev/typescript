{
//Inheritence

class CommonClass{
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(numberOfHours: number){
        console.log(`${this.name} will sleep ${numberOfHours}`);
    }
}
class Student extends CommonClass{ 
    constructor(name: string, age: number, address: string){
        super(name,age,address); //super method call kore Student constructor er value sob parent class ba common class er constructor e pahtai dicce.
    }
}

class Teacher extends CommonClass{
 
    designation: string;

    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address);
        this.designation = designation;
    }

    getSleep(numberOfHours: number){
        console.log(`${this.name} will sleep ${numberOfHours}`);
    }

    takeClass(numberOfClass: number){
        console.log(`${this.name} person take  ${numberOfClass} class`)
    }
}

const student1 = new Student("Mr. Student", 20, "Dhaka");
const teacher1 = new Teacher("Mr teacher",55,"London","teacher");















}