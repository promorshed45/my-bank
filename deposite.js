document.getElementById('deposite-btn').addEventListener('click', function(){

    const depositeField = document.getElementById('deposite-field');
    const depositeAmount = depositeField.value;
    console.log(depositeAmount);

    const previousDepoiste = document.getElementById('total-deposite');
    const totalDeposite = previousDepoiste + depositeAmount;
    totalDeposite.innerText = depositeAmount;

    console.log(totalDeposite);

    
})