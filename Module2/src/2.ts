{

//interface
//->Interface diyeo type script er type declare kora jai alias er moto
//type alias sokol premitive er khetre use korbo ebong object er khetree type alias ba interface user korte parbo.
//doing using alias
type User1 = {
    name: string;
    age: number;
}
const user1 : User1 = {
    name: "Uttam",
    age: 100
}

//doing using interface
interface User2 {
    name: string;
    age: number;
}
const user2 : User2 = {
    name: "Uttam",
    age: 100
}



//creating new intersection type  using type alias
type UserWIthRole1 = User1 & {role: string} // user1 k role key/property er sahte intersection kortrese fole UserWIthRole1 e "role" value ta thakbe ebong eta r value insert ba use kortei hbe

const user3 : UserWIthRole1 = {
    name: "Uttam",
    age: 100,
    role: 'manager'
}

//creating new intersection type using interface
interface userWithRole2 extends User1 { //type k extend koreo interface banate pari
    role: string; //User2 ekta interface here User2 interface k extend kore role name new ekta type bole dicchi
}
const user4 : userWithRole2 = {
    name: "Uttam",
    age: 100,
    role: 'manager' 
}



//declare array using alias 
type Roll1 = number[];
const rollNumber1 : Roll1 = [1,2,3];
//doing using interface
interface Roll2 {
    [index:number] : number // array er index er type number & array hold kortese number type er data
}
const rollNumber2 : Roll2 = [1,2,3];

//function using type alias
type Add = (num1: number, num2:number) => number;
const add : Add = (num1, num2) => num1 + num2;


//function using interface
interface Add1 {
    (num1: number, num2:number) : number;//return type
}
const add2 : Add = (num1, num2) => num1 + num2;
}