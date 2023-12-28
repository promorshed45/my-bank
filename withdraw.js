document.getElementById('withdraw-btn').addEventListener('click',function(){

   const withdrawField = document.getElementById('withdraw-field');
   const withdrawFieldString = withdrawField.value;
   const newWithdrawAmount = parseFloat(withdrawFieldString);

   const previousWithdraw = document.getElementById('total-withdraw');
   const priviousWithdrawString = previousWithdraw.innerText;
   const previousWithdrawTotal = parseFloat(priviousWithdrawString);


   const currentTotalWithdraw = previousWithdrawTotal + newWithdrawAmount;
   previousWithdraw.innerText = currentTotalWithdraw;
   
   console.log(currentTotalWithdraw);
   

   const previousBalance = document.getElementById('total-balance');
   const previousBalanceString = previousBalance.innerText;
   const totalPreviousBalance = parseFloat(previousBalanceString);

   const currentTotalBalance = totalPreviousBalance - newWithdrawAmount;
   previousBalance.innerText = currentTotalBalance;

   withdrawField.value = '';

})