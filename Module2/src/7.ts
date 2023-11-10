{
//generic constraint with keyof operator
//ekta typer key diye union kore literal banale keyof operator use korte pari
type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}


type Owner = 'bike' | 'car' | 'ship'; //manually literal

type Owner2 = keyof Vehicle; // vehicle er key gulo niye ekta union type banacche literal


const person1 : Owner = "bike";
const person2 : Owner2 = "car";






//-------------------------------------------->
//Ekhane ekta function likchi j function er kaj hocche ami parameter hisbe object pathabo kintu sei object er moddhe j property thakbe parameter seta chara rcv korbe na. 
//key of diye constrants korchi
//Y extends keyof x -> mane X object er key gulo diye union hoise. ebong keyof X constaitns hisebe use hccce
const  getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key]
}
const user = {
    name: 'Mr. X',
    age: 26,
    address: 'ctg'
}

const result = getPropertyValue(user,"name");
const result2 = getPropertyValue(user, "model"); //model property nai user e se jonno error dicche


}