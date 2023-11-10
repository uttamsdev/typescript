{
//OOP

//CLASS
class Animal {
    public name: string; //class property
    public species: string;
    public sound: string; //public hocce access modifier, na likhe dileo by default sob kichu public

    //class er value initialize korte constructor use korte hoi
    constructor(name:string, species: string, sound:string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    //making method: class er moddhe function thakle setake method bole. anonymous function likte hio cls er moddhe method hiseb / normal function use kortre hobe method er jonno arrow function e this. kaj kore na
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`); ///this. diye class er property access korte hoi

    }
}


//creating obj/instances using Animal class
const dog = new Animal("Sheru", "Persian", "Gheu Gheu");
console.log(dog.name, dog.sound, dog.species);

const cat = new Animal("Cat","Persian","mew, mew");

cat.makeSound();







//doing the same thing using parameter properties

//TODO: Parameter properties
//parameter property use kore class er property ebong constructor e initialize korte hoi na. constructor er er age public likle class property k initialize kore dei
class Animal2 {
    constructor(public name:string, public species: string, public sound:string){}

    //making method: class er moddhe function thakle setake method bole. anonymous function likte hio cls er moddhe method hiseb / normal function use kortre hobe method er jonno arrow function e this. kaj kore na
    makeSound(){
        console.log(`The ${this.name} says ${this.sound}`); ///this. diye class er property access korte hoi

    }
}

const cat2 = new Animal2("Cat2","American","Mewwwwwwwwww");
cat2.makeSound();
console.log(cat2.name);
}