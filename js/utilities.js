function getCurrentBalance(){
    const currentBalance = parseFloat(document.getElementById('current-balance').innerText);
    return currentBalance;
}

function updateBalance(donation){
    const newBalance = getCurrentBalance() - parseFloat(donation);
    document.getElementById('current-balance').innerText = newBalance;


}

function donate(id , amount){
    const currentDonation = parseFloat(document.getElementById(id).innerText);
    document.getElementById(id).innerText = currentDonation + parseFloat(amount);
    updateBalance(amount);


}

function showSectionById(id){
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function addTransaction(amount, name){
    const div = document.createElement('div');

    const date = new Date();
    const dateFormat = date.toLocaleDateString();
    

    div.classList.add('border-solid', 'border-2', 'p-4', 'lg:p-6', 'rounded-lg');
    div.innerHTML = `
        <h4 class="text-2xl font-bold">Tk ${amount} has been donated to ${name}.</h4>
        <p>Date: ${date}</p>
    
    
    
    `
    document.getElementById('history-section').appendChild(div);
}