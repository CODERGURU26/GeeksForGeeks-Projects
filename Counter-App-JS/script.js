let count = 0;
let inClicks = 0;
let deClicks = 0;

function updateDisplay(){
    document.getElementById('count').textContent = count
    document.getElementById('inCount').textContent = inClicks
    document.getElementById('deCount').textContent = deClicks
}

function inc(){
    count++;
    inClicks++;
    updateDisplay()
}

function dec(){
    count--
    deClicks++;
    updateDisplay();
}