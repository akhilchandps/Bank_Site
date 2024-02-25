function Register() {
    bank={
        username:uname.value,
        Accountno:acno.value,
        password:pwd.value,
        balance:0
    }
    if(bank.username==''||bank.Accountno==''||bank.password==''){
        alert("Please fill all the details !")
    }
    else{
        if(bank. Accountno in localStorage){
            alert("Account already exists !")
        }
        else{
            localStorage.setItem(bank.Accountno,JSON.stringify(bank))
            alert("User Successfully Registered")
            window.location='./login.html'
        }
    }

}


function login() {
    acc=accno.value;
    pass=pwwd.value;
    if(acc =="" || pass =="")
    {
       alert("please enter username and password")
    } 
   else if(acc in localStorage){
        accDetails=JSON.parse(localStorage.getItem(acc))
        if(pass == accDetails.password){
            localStorage.setItem("USER",accDetails.username)
            localStorage.setItem('ACC',accDetails.Accountno )
            alert("Login successfull")
            window.location= `./main.html`;
        }
        else{
            alert("invalid username or password")
        }
    }
    else{
        alert("invalid account number")
    }
   

}




function deposit() {
    amt=amount.value
    console.log(amt);
    pas=passw.value
    console.log(pas);
    stored= localStorage.getItem('ACC')
    console.log(stored);
    person =JSON.parse(localStorage.getItem(stored))
    console.log(person);
    if(amt>0)
    {
    if(pas == person.password){
        person.balance+=Number(amt)
        localStorage.setItem(stored, JSON.stringify(person))
        alert(`${amt} has been deposited successfully`)
        result.innerHTML=`Your current Balance : ${person.balance}`
        amount2.value=''
        passw2.value=''
        result2.innerHTML=``
    }
    else{
        alert("Invalid Password")
    }
}
else{
    alert("enter a valid amount")
    }
   
}


function withdraw() {
    amt=amount2.value
    console.log(amt);
    pas=passw2.value
    console.log(pas);
    stored= localStorage.getItem('ACC')
    console.log(stored);
    person =JSON.parse(localStorage.getItem(stored))
    console.log(person);
    if(amt>0)
    {
    if(pas == person.password){

        if(person.balance >= amt)
        {
        person.balance-=Number(amt)
        localStorage.setItem(stored, JSON.stringify(person))
        alert(`${amt} has been withdrawed successfully`)
        amount.value=''
        passw.value=''
        result.innerHTML=``
        result2.innerHTML=`Your current Balance : ${person.balance}`
        }
       else{
        alert("Insufficient balance")
        }
}
else{
    alert("Incorrect password")
    }
   
}
else{
    alert("Enter avalid amount")
}

}

