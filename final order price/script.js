function price_calculator(){
    let num = document.getElementById("num").value;
    
    let sum = 0;
    while (num>0){
        sum += Number(prompt("Enter the price of the product"));
        num -= 1;
    }
    document.getElementById("result").innerText = sum;
}

document.getElementById("btn").addEventListener("click",price_calculator);