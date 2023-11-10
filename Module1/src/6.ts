{

//Type alias
//common ekta type lekha takbe bar bar lekha lagbe na
type Student = {
    name: string,
    age: number,
    gender: string,
    contractNo?: string,
    address: string
}

const student1 : Student = {
    name: 'Uttam',
    age: 10,
    gender: 'male',
    contractNo: '01711212121',
    address: 'Dhaka'
}


const student2 : Student = {
    name: 'Komol',
    age: 11,
    gender: 'male',
    address: "Dhaka"
}


//string type alias
type UserName = string
const username : UserName = 'UttamSaha'


//type alias in function
type Add = (num1: number, num2: number) => number; //return number type
const add : Add = (num1, num2) => num1 + num2;


}