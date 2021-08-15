// handle deposit button event 
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount deposited 
    const depositInput = document.getElementById('deposit-amount');
    const newDepositAmount = depositInput.value;
    console.log(newDepositAmount);

    // update deposit total 
    const currentDeposit = document.getElementById('total-deposit');
    const currentDepositAmount = currentDeposit.innerText;
    const updatedDepositAmount = parseFloat(currentDepositAmount) + parseFloat(newDepositAmount);
    currentDeposit.innerText = updatedDepositAmount;

    // update account balance 
    const totalBalance = document.getElementById('total-balance');
    //changing string to number
    const totalBalanceText = totalBalance.innerText;
    const previousBalanceTotal = parseFloat(totalBalanceText) 
    const updatedBalanceAmount = previousBalanceTotal + parseFloat(newDepositAmount)
    totalBalance.innerText = updatedBalanceAmount;
    // clear deposit input box after submit 
    depositInput.value = '';
});

// handle withdraw event
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText)
    console.log(newWithdrawAmount);

    //set withdraw total
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdrawText = totalWithdraw.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    totalWithdraw.innerText = newWithdrawTotal;

    //update balance
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceText = totalBalance.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalance = previousBalanceTotal - newWithdrawAmount;

    totalBalance.innerText = newBalance;

    //clear withdraw input box
    withdrawInput.value = ''
});
