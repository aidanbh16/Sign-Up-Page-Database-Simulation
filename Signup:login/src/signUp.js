var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var accountList = [];
var accountNumber = localStorage.length;
for(let i = 0; i < accountNumber + 1; i++){
    localStorage.clear("account" + i);
}

window.onload = function(){
    for(let i = 0; i < localStorage.length; i++){
        console.log("These are the current accounts signed up: ");
        console.log(localStorage.getItem("account" + i));
    }
};


const showAccounts = {
    command() {
        for(let i = 0; i < accountNumber; i++){
            console.log(i);
            console.log(localStorage.getItem("account" + i));
        }
    }
}

const clearAccounts = {
    command() {
        for(let i = 0; i < accountNumber + 1; i++){
            localStorage.clear("account" + i);
        }
        accountNumber = 0;
        console.log(accountNumber);
        for(let i = 0; i < accountNumber + 1; i++){
            console.log(localStorage.getItem("account" + i));
        }
    }
}

function accountCreation(user, email, pass){
    this.username = user;
    this.email = email;
    this.password = pass;
    this.accountNumber = accountNumber;
}

script.onload = function () {
    $("#form").submit(function(e) {
        e.preventDefault();
    });
    $("#form").submit(function(){
        if (document.querySelector(".check").checked){
            const user = $(".userBox").val();
            for(let i = 0; i < accountList.length; i++){
                if (user === accountList[i].username){
                    alert("This username is already in use.");
                    console.log("This username is already in use.");
                    return false;
                }
            }
            const email = $(".emailBox").val();
            for(let i = 0; i < accountList.length; i++){
                if (email === accountList[i].email){
                    alert("This email is already in use.");
                    console.log("This email is already in use.");
                    return false;
                }
            }
            const pass = $(".passBox").val();
            const conPass = $(".conPassBox").val();
            if (pass === conPass){
                let tempAccount = new accountCreation(user, email, pass);
                accountList.push(tempAccount);
                localStorage.setItem("account" + accountNumber, JSON.stringify(tempAccount));
                console.log("These are the current accounts signed up: ");
                for (let i = 0; i < accountNumber + 1; i++){
                    console.log(accountList[i]);
                }
                accountNumber++;
                alert("Account created. (check console for more info)");
            }
            else {
                alert("Password and confirm password must be the same.");
                console.log("Password and confirm password must be the same.");
            }
        }
        else {
            alert("Please agree to our terms and conditions to continue.");
            console.log("Please agree to our terms and conditions to continue.");
        }
    });
}