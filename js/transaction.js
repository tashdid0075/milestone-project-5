document.getElementById('noakhali-donation-btn').addEventListener('click', function(){
    const amount = document.getElementById('noakhali-donation-amount').value;
    donate('noakhali-donation', amount);
    addTransaction(amount, "flood victims of Noakhaki");
})

document.getElementById('feni-donation-btn').addEventListener('click', function(){
    const amount = document.getElementById('feni-donation-amount').value;
    donate('feni-donation', amount);
    addTransaction(amount, "flood victims of Feni");
})

document.getElementById('protest-donation-btn').addEventListener('click', function(){
    const amount = document.getElementById('protest-donation-amount').value;
    donate('protest-donation', amount);
    addTransaction(amount, "victims during the protest");
})

