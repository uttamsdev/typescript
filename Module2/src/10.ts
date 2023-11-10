{
//mapped type
const arrayOfNumbers : number[] = [1,2,3,4];

const arrayOfStrings : string[] = ['1','2','3'];

//

const ArrayOfStrings : string[] = arrayOfNumbers.map(number => number.toString()) //retrun string number



//map type
type AreaNumber = {
    height: number;
    width: number;
};

type AreaString = {
    height: string;
    width: string;
}


//lookup type
type Height = AreaNumber["height"]; //Area number theke height property k niye ese setar type hobe Height er tyep
//Number ebong string e area ber korte 2 ta Type declare kora lagcehe amra eta mapped type diye dynamically korte parbo
//same kaj ta mapped type diye " key in hocceh AreaNumber er property gulo ekta ekta kore niye asteche"
type AreaString1 = {
    [key in keyof AreaNumber] : string // areanumber theke key gulo k niye loop caliye string kore dibe 
}

//---------------------------------------------->



}