{
//Generic type
//-> amra jodi kono ekta type k dynamic valbe k kono somoy e amra amader proyojon onushare amra type toiri korte pari ebong seta k reuse korte pari setai generic type
//-> generic type diye dynamically reusable type define korte pari
// const rollNumber : number[] = [2,3,4,5,5];
const rollNumber : Array<number> = [2,3,4,5,5]; // Array<number>  evaebo amra array er type bole dite pari</number>

// const mentors : string[] = ["mr. x", "mr. y", "mr. z"];
const mentors : Array<string> = ["mr. x", "mr. y", "mr. z"]; //string typer er array evabeo declare kora jai

// const boolArray : boolean[] = [true, false, true];
const boolArray : Array<boolean> = [true, false, true];


//doing the same thing use type generic
type GenericArray<T> = Array<T> //eta ekta generic type ekhaen T hocce parameter amra ei generic type k dynamically j kono type e call korte pari ba use korte pari.
const rollNumber1 : GenericArray<number>= [2,3,4,5,5]; // Array<number>  evaebo amra array er type bole dite pari</number>
const mentors2 : GenericArray<string> = ["mr. x", "mr. y", "mr. z"]; //string typer er array evabeo declare kora jai
const boolArray3 : GenericArray<boolean> = [true, false, true];





//array of object using generic
const user : GenericArray<{name:string, age:number}> = [ //
    {
        name: 'Mezba',
        age: 10,
    },
    {
        name: 'Jkhankar Mahbub',
        age: 100
    }
]

//doing the same thing using -> generic with interface
//array of object using generic
interface User  {
    name: string;
    age: number;
}
const user5 : GenericArray<User> = [ // ekhaen User ekta object type jar property name and age
    {
        name: 'Mezba',
        age: 10,
    },
    {
        name: 'Jkhankar Mahbub',
        age: 100
    }
]


//generic tuple

const manush : [string, string] = ['Mr. X', 'Mrs. Y']

type GenericTuple<X, Y> = [X, Y];
const manush2 : GenericTuple<string, string> = ["Mr A", "Mrs. B"];

const UserWithID : GenericTuple<number,{name:string, email: string}/*2nd type object with name and email properties*/> = [1234, {name: 'uttam', email: 'a@gmail.com'}];



}