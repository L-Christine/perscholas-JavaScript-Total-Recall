//====Inheritance

class Person{
    constructor(name, age, height, think, talk, feel){
        this.name = name
        this.age = age
        this.height = height
        this.think = think
        this.talk = talk 
        this.feel = feel 
    }
    toThink(){
        console.log('Can Think')
    }
    toTalk(){
        console.log('Can Talk')
    }
    toFeel(){
        console.log('Can Feel')
    }
}
    

class postalWorker extends Person{
    constructor(name, age, height, think, talk, feel, deliver, drive, collect){
        super(name, age, height, think, talk, feel)
        this.deliver = deliver
        this.drive = drive
        this.collect = collect 
    }
    toThink(){
        super.toThink()
    }
    toTalk(){
        super.toTalk()
    }
    toFeel(){
        super.toFeel()
    }
    toDeliver(){
        console.log('Can Deliver')
    }
    toDrive(){
        console.log('Can Drive')
    }
    toCollect(){
        console.log('Can Collect')
    }

}

class chef extends Person{
    constructor(name, age, height, think, talk, feel, bake, fry, decorate){
        super(name, age, height, think, talk, feel)
        this.bake = bake
        this.fry = fry
        this.decorate = decorate  
    }
    toThink(){
        super.toThink()
    }
    toTalk(){
        super.toTalk()
    }
    toFeel(){
        super.toFeel()
    }
    toBake(){
        console.log('Can Bake')
    }
    toFry(){
        console.log('Can Fry')
    }
    toDecorate(){
        console.log('Can Decorate')
    }
}
const person1 = new postalWorker('Smith', 30, '6.1 ft', true, true, true, true, true, true)
console.log(person1)
person1.toThink()
person1.toTalk()
person1.toFeel()
person1.toDeliver()
person1.toDrive()
person1.toCollect()


const person2 = new postalWorker('Jackson', 45, '5.9 ft', true, true, true, true, true, true)
console.log(person2)
person2.toThink()
person2.toTalk()
person2.toFeel()
person2.toDeliver()
person2.toDrive()
person2.toCollect()

const person3 = new chef('Sanders', 50, '5.7 ft', true, true, true, true, true, true)
console.log(person3)
person3.toThink()
person3.toTalk()
person3.toFeel()
person3.toBake()
person3.toFry()
person3.toDecorate()

const person4 = new chef('Anderson', 40, '5.8 ft', true, true, true, true, true, true)
console.log(person4)
person4.toThink()
person4.toTalk()
person4.toFeel()
person4.toBake()
person4.toFry()
person4.toDecorate()


//====Bank Account

class BankAccount{
    constructor(ownerName, balance, acctNum){
    this.ownerName = ownerName
    this.balance = balance
    this.acctNum = acctNum
    }
    deposit(amtDeposit){
        console.log(`Deposit: $${amtDeposit}`);
    }

    withdraw(amtWithdraw){
        console.log(`Withdraw: $${amtWithdraw}`);
    }
}

class CheckingAccount extends BankAccount{
    constructor(ownerName, balance, acctNum, overdraftEnabled = true){
        super(ownerName, balance, acctNum)
        this.overdraftEnabled = overdraftEnabled 
    }
    overdraft(amtWithdraw){
        let currentBalance = this.balance- amtWithdraw
        if (currentBalance < 0){
            console.log('Overdraft: $'+ currentBalance)     
        } else {
            console.log('Current Balance: $'+ currentBalance);
        }
        
    }
    withdraw(amtWithdraw){
        super.withdraw(amtWithdraw)
        this.overdraft(amtWithdraw)
    }
}

class SavingsAccount extends BankAccount{
    constructor(ownerName, balance, acctNum){
        super(ownerName, balance, acctNum)
    }
    disallow(amtWithdraw){
        let noBalance = this.balance - amtWithdraw
        if (noBalance < 0){
            console.log('Complete withdrawal is not allowed')
        }
    }
    withdraw(amtWithdraw){
        super.withdraw(amtWithdraw)
        this.disallow(amtWithdraw)
    }
}

//====test bank account

const bank = new BankAccount('Pichu', 100, 1234)
console.log(bank)

const checking = new CheckingAccount('Pikachu', 60, 4567, true)
console.log(checking)


const savings = new SavingsAccount('Raichu', 25, 78910)
console.log(savings)


bank.withdraw(100)
checking.withdraw(70)
savings.withdraw(50)