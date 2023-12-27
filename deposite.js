document.getElementById('deposite-btn').addEventListener('click', function(){

    const depositeField = document.getElementById('deposite-field');
    const newdepositeAmountString = depositeField.value;
    const newdepositeAmount = parseFloat(newdepositeAmountString);
    console.log(typeof(newdepositeAmount));

    const previousDepoiste = document.getElementById('total-deposite');
    const previousDepoisteString = previousDepoiste.innerText;
    const previousDepoisteTotal = parseFloat(previousDepoisteString);

    console.log(typeof(previousDepoisteTotal));


    const currentTotalDeposite = previousDepoisteTotal + newdepositeAmount;
    previousDepoiste.innerText = currentTotalDeposite;


    const totalBalance = document.getElementById('total-balance');
    const newtoTalBalance = totalBalance.innerText;
    totalBalance.innerText = currentTotalDeposite;

    

    
})