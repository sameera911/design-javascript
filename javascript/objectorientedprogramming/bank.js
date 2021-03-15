class Bank
{
    constructor(accno,pname,minbal)
    {
        this.accno=accno;
        this.pname=pname;
        this.bal=minbal;
    }
    deposit(amount)
    {
        this.bal+=amount;
        console.log("Account credited with "+amount+". Available balance is "+this.bal);
    }
    withdraw(amount)
    {
        if(amount>this.bal)
        {
            console.log("Insufficient Balance");
        }
        else
        {
            this.bal-=amount;
            console.log("Account debited with "+amount+". Available balance is "+this.bal);
        }
    }
}

var obj=new Bank(1234,"Raj",3000);
//obj.createAccount(1234,"Raj",3000);
obj.deposit(3000);//tytu