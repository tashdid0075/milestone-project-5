document.getElementById('show-donation-btn').addEventListener('click', function(){
    showSectionById('donation-section');
    document.getElementById('show-donation-btn').classList.add('bg-lime-400');
    document.getElementById('show-history-btn').classList.remove('bg-lime-400');


})

document.getElementById('show-history-btn').addEventListener('click', function(){
    showSectionById('history-section');
    document.getElementById('show-history-btn').classList.add('bg-lime-400');
    document.getElementById('show-donation-btn').classList.remove('bg-lime-400');


})