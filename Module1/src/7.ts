{

//union type //hoi eta hobe othoba ota hobe
type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
type FullStackDeveloper = 'FrontedDevelper' | 'expertDeveloper'
type Developer = FrontendDeveloper | FullStackDeveloper

const newDeveloper : FrontendDeveloper = 'juniorDeveloper' //literal ekhane fakibazDeveloper ebong junior devlper chara r kono value dewa jabe na

type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "A+" | "AB+"
}


const user : User = {
    name: 'uttam',
    gender: 'Female',
    bloodGroup: 'A+',
}




//intersection 
type FrontendDevelopers = {
    skills: string[];
    designation1: 'Frontend Developer'
}
type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer'
}

type FullStackDevelopers = FrontendDeveloper & BackendDeveloper

//ekhane FullStackDeveloeprs type er moddhe FrontendDeveloper & BackendDeveloper 2 tai intersection kortesi. So FullStackDeveloper type user korle oi 2 ta typer ei sob property thakte hobe
// const fullstackDevelopers : FullStackDevelopers = {
//     skills: ['HTML', 'CSS', "Express"],
//     designation1: 'Frontend Developer',
//     designation2: 'Backend Developer'
// }



}