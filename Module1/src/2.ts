// Reference type --> Object

const user : {
    firstName : string;
    middleName: string,
    lastName : string;
} = {
    firstName: 'uttam',
    middleName: 'Kumar',
    lastName: 'saha'
}

//Optional type
const user2 : { //ekhane middle name optional type middle name thakteo pare nao thakte pare
    firstName : string;
    middleName?: string, //optional type
    lastName : string;
    isMarried?: false;
    company : 'Programming Hero'; // type --> Literal type -> ei type e fixed value programming hero lekha ache . object er key te programming hero bade onno value use kora jabe na use korle error dibe
} = {
    firstName: 'uttam',
    lastName: 'saha',
    company: 'Programming Hero',
}

//readOnly access modifier
let user3 : {
    readonly role: string; // ei value ta read only ei key er value write ba update kora jabe na
}= {
    role: "admin"
}
