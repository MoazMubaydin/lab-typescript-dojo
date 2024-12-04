//
// Iteration 3 | Classes
//


class BankAccount {
    balance:number= 0;
    accountHolder:string;

    constructor(accountHolder:string){
        this.accountHolder=accountHolder;
    }

    getBalance():number{
        return this.balance;
    }
    
    deposit(amount:number):number | string{
        if(amount <= 0){
            return "please provide a valid amout";
        }
        return this.balance+=amount;

    }
    withdraw(amount:number){
        if(amount <= 0){
            "please provid a valid amout"
        }
        if(amount > this.balance){
            return "Insufficient funds"
        }
       return this.balance -= amount
    }
    
}