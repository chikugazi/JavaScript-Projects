let decrementBtn = document.getElementById("decrementBtn");
let incrementBtn = document.getElementById("incrementBtn");
let displayValue = document.getElementById("displayValue");
let resetBtn = document.getElementById("resetBtn");

// // for decrement button
decrementBtn.addEventListener("click", ()=>{
    let value = Number(displayValue.innerText);
    if (value<=0){
        alert("Negative numbers are not allowed");
    }
    else{
        displayValue.innerText = value - 1;
    }
});

// // for increment button
incrementBtn.addEventListener("click", () => {
    let value = Number(displayValue.innerText);
    if(value>10){
        alert("Numbers greater tha 10 are not allowed");
    }
    else{
        displayValue.innerText = value + 1;
    }
});

// // for reset button
resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
});

