//Learning function


//normal function
function add(num1 : number, num2 : number /*return type*/) : number{ 
    return num1+num2;
}

add(2,4);


//arrow function
const addArrow = (num1 : number, num2 : number) : number => num1 + num2;


// object er moddhe function thakle setake method bole
//method
 const poorUser = {
    name: 'uttam',
    balance: 0,
    addBalance(balance:number) : string{ //normal anonymous function
        return `My new balance is ${this.balance + balance}`
    }
 }

 const arr : number[] = [1,2,4];
 
 const newArray : number[] = arr.map((element : number) : number /*return type*/ => element*element)