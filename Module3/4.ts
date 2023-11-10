{
//instenceof guard

class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    makeSound(){
        console.log("I am making sound");
    }
}


class Dog extends Animal{
    constructor(name : string, species : string){
        super(name,species);
    }
    makeBark(){
        console.log("I am barking");
    }
}

class Cat extends Animal{
    constructor(name : string, species : string){
        super(name,species);
    }
    makeMew(){
        console.log("I am Mewwwing");
    }
}


const getAnimal = (animal : Animal) => { //Animal cass k type hisebe use kortesi
    if(animal instanceof Dog){
        animal.makeBark();
    }
    else if(animal instanceof Cat){
        animal.makeMew();
    } else {
        animal.makeSound();
    }
}

const dog = new Dog("Dog Bhai","Dog");
const cat = new Cat("Cat bhai", "Cat");

getAnimal(dog);
}