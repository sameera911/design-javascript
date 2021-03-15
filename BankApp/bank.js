class Bank {
    static getAccountDetails() {
       var accountDetails =
        {
            1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
            1001: { acno: 1001, name: "usertwo", balance: 3500, password: "user2" },
            1002: { acno: 1002, name: "userthree", balance: 6000, password: "user3" },
            1003: { acno: 1003, name: "userfour", balance: 7000, password: "user4" },
            1004: { acno: 1004, name: "userfive", balance: 5200, password: "user5" },
        }
        return accountDetails;
    }
    static login()
     {
        var acno = document.querySelector("#txtacc").value;
        var pwd = document.querySelector("#pass").value;
        var data = Bank.getAccountDetails();
        if (acno in data)
        {
            if (pwd == data[acno].password)
                {
                alert("Authentication success");
                window.location.href="userhome.html";
                }
            else

                {alert("invalid password");}
        }
        else {
            alert("There is no User with this account number");
        }

    }


    static authenticateUser(acno,pass)
    {
        var data=Bank.getAccountDetails();
        if (acno in data)
        {
            if (pass == data[acno].password)
                {
                    return 0; //valid credential
                }
            else

                {return 1;} //invalid pwd
        }
        else {
           return -1; //invalid accnumber
        }

    }


    static deposit()
    {
        var acno = document.querySelector("#txtacc").value;
        var pwd = document.querySelector("#pass").value;
        var amt=document.querySelector("#txtamt").value;
        let user=Bank.authenticateUser(acno,pwd);
        var data=Bank.getAccountDetails();
        if (user==0)
        {
        var bal=data[acno].balance+=Number(amt);
        alert("deposit successful. Balance is "+bal);
        }
        else if(user==1)
        {
            alert("invalid password");
        }
        else{
            alert("invalid account number");
        }
    }

    static withdraw()
    {
        var acno = document.querySelector("#txtacc").value;
        var pwd = document.querySelector("#pass").value;
        var amt=document.querySelector("#txtamt").value;
        let user=Bank.authenticateUser(acno,pwd);
        var data=Bank.getAccountDetails();
        if(user==0)
        {
            if(amt>data[acno].balance)
            {
                alert("insufficient balance");
            }
            else
            {
                var bal=data[acno].balance-=Number(amt);
                if(bal<3000)
                {
                    alert("You have insufficient balance");
                }
                else{
                    //data[acno].balance=bal;//push
                    alert("Withdraw successful. Balance is "+bal);
                }
            }
        }
        else if(user==1)
        {
            alert("invalid password");
        }
        else{
                 alert("invalid account number");
            }
        
    }
}