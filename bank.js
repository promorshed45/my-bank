document.getElementById('submit').addEventListener('click', function(){
   
    const accountField = document.getElementById('accountno');
    const    accountNumber = accountField.value;
    const passwordField = document.getElementById('password');
    const accountPassword = passwordField.value;


    if(accountNumber && accountPassword){
        location.href = "bank.html";
    }else{
        alert('Invalid user');
    }
})

