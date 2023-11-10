{

//Type guards

type AlphaNumeric = string | number;
const add = (param1: AlphaNumeric, param2: AlphaNumeric) : AlphaNumeric => {
    if(typeof param1 =="number"  && typeof param2=="number"){
        return param1+param2;
    } else {
        return param1.toString() + param2.toString();
    }
}

const result = add(2,3);
console.log(result);






//in guard
type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "admin" //fixed
}

const getUser = (user: NormalUser | AdminUser) => {
    if('role' in user){ //jodi user er modhe role thake
        console.log("I am admin user");
    } else {
        console.log("I am Normal user");
    }
}


const normalUser : NormalUser = {
    name: "Normal user"
}
const adminUser : AdminUser = {
    name: "Admin user",
    role: "admin"
}

getUser(normalUser);
getUser(adminUser);
}