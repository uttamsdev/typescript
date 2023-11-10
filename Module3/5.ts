{
//Access modifier

class BankAccount {
    readonly id: number;
    name: string;
    private balance: number; //private access modifier sudu matro sei class er moddhe access kora jabe class er baire jabe na access kora

    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name; 
        this.balance = balance;
    }


    getBalance(){
        return this.balance;
    }
    addDeposit(amount: number){
        this.balance += amount;
    }
}


class StudentAccount extends BankAccount {
    test(){
        //this. (private / protected er moddhe difference hocche private user korle sudu sei class er moddhe accessable for property kinu kono class extend korle sekhane access kora jabe na 
        //kintu protected use korle child class e use kora jai acess kora jai )
    }
}
const poorAccount = new BankAccount(111,"poor man",20);
poorAccount.id = 222; // amara user id id name , balance change kore felte partesi modify korte partesi eta ucit na
poorAccount.addDeposit(20);
console.log(poorAccount.getBalance());
}