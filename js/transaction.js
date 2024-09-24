document.getElementById('noakhali-donation-btn').addEventListener('click', function(){
    const amount = parseFloat(document.getElementById('noakhali-donation-amount').value);
    if(isNaN(amount) || amount < 0){
        alert("Failed to make a donation. Try again.");
        return;
    }
    else if(amount > getCurrentBalance()){
        alert("Not Enough Balance");
        return;
    }


    donate('noakhali-donation', amount);
    addTransaction(amount, "flood victims of Noakhaki");
    document.getElementById('modal').showModal();
})

document.getElementById('feni-donation-btn').addEventListener('click', function(){
    const amount = parseFloat(document.getElementById('feni-donation-amount').value);
    if(isNaN(amount || amount < 0)){
        alert("Failed to make a donation. Try again.");
        return;
    }
    else if(amount > getCurrentBalance()){
        alert("Not Enough Balance");
        return;
    }

    donate('feni-donation', amount);
    addTransaction(amount, "flood victims of Feni");
    document.getElementById('modal').showModal();
})

document.getElementById('protest-donation-btn').addEventListener('click', function(){
    const amount = parseFloat(document.getElementById('protest-donation-amount').value);
    if(isNaN(amount || amount < 0)){
        alert("Failed to make a donation. Try again.");
        return;
    }
    else if(amount > getCurrentBalance()){
        alert("Not Enough Balance");
        return;
    }

    donate('protest-donation', amount);
    addTransaction(amount, "victims during the protest");
    document.getElementById('modal').showModal();
})

