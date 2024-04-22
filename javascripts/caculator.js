const btn1 = document.getElementById("btn1");
const dli1 = document.getElementById("DLI1");
const ppfd1 = document.getElementById("PPFD1");
const hour1 = document.getElementById("hour1");
const btn2 = document.getElementById("btn2");
const dli2 = document.getElementById("DLI2");
const ppfd2 = document.getElementById("PPFD2");
const hour2 = document.getElementById("hour2");

function customRound(value, num) {
    return Math.round(value * Math.pow(10, num)) / Math.pow(10, num)
}

btn1.addEventListener("click", function(){
    if (ppfd1.value!=0 | hour1.value!=0){var dli = customRound(ppfd1.value * hour1.value * 3600 / 1000000, 4);}
    else{var dli = 0;}
    dli1.textContent = String(dli) + " (mol/(m²·day))";
})
btn2.addEventListener("click", function(){
    if (dli2.value!=0 | hour2.value!=0){var ppfd = customRound(dli2.value * 1000000 / hour2.value / 3600, 4);}
    else{var ppfd = 0;}
    ppfd2.textContent = String(ppfd) + " (μmol/(m²·sec))";
})
