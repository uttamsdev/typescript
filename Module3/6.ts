{
    //Getter and setter 
    
    class BankAccount {
        readonly id: number;
        name: string;
        private balance: number; //private access modifier sudu matro sei class er moddhe access kora jabe class er baire jabe na access kora
    
        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name; 
            this.balance = balance;
        }
    
        //setter
        set deposit(amount: number){
            this.balance += amount; //get function parameter nei na. r set function return kore na. setter diye set kore getter diye get korbo
        }
        //getter
        get Balance(){
            return this.balance;
        }
        // getBalance(){
        //     return this.balance;
        // }
        // addDeposit(amount: number){
        //     this.balance += amount;
        // }
    }
    
    
   
    const poorAccount = new BankAccount(111,"poor man",20);
    // poorAccount.addDeposit(20);
    // console.log(poorAccount.getBalance());
    const myBalance = poorAccount.Balance; // Balance ekta getter function ekta (dot) diye getter setter function user kote hoi object er property er moto kore
    poorAccount.deposit = 50; //deposit is setter here
    }