{

//utility types

//pick utility 

type Person = {
    name: string;
    age: number;
    email?: String;
    contactNo: string;
}


type Name = Pick<Person,"name"> //Person typer er name er type ta k pick kore ene type Name e assign kortesi


type NameAge = Pick<Person,"name"|"age"> // person theke name ebong age k niye astechi pick kore



//omit utility

type ContactInfo = Omit<Person,"name"|"age">// Person type theke name ebong age bad diye baki property gulo diye new type make korche



//Require utility -> sob gulo type e required kore dibe
type PersonRequired = Required<Person>;// Person type er sob gulo property k required kore new ekta type create kortese

//Partial utility -> sob gulo property k optional kore dibe

type PersonPartial = Partial<Person>; //Person type er sob gulo property k optional baniye new type create kroche.





//readOnly
type personReadOnly = Readonly<Person>;
const person1 : personReadOnly = {
    name: "Mr XY",
    age: 200,
    contactNo: "0111"
}

person1.name = "Mr A"; //person1 er value change korte parsi na error dicche readOnly er jonno





//Record type
type MyObj = {
    a: string;
    b: string;
}

const obj1 : MyObj = {
    a: 'aa',
    b: 'bb',
    c: 'cc', //ekhaen c k use korte partesi na karon MyObj type e c key nai kintu amra dynamically record type diye eta korte pari
}



//using record type;
type MyObj1 = Record<string,string>; // record er moddhe obj er key string ebong value string pass krtesi. ekhane first string key er type 2nd string value er type

const obj2 : MyObj1 = {
    a: 'aa',
    b: 'bb',
    c: 'cc', // well ekhane c k add korte partesi
}











}