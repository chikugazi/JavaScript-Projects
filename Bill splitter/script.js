function bill_splitter(){
    let num = document.getElementById("num").value;
    let dishes = document.getElementById("dishes").value;

    let total_price = 0;
    while (dishes>0){
        total_price +=  Number(prompt("Enter the price"));
        dishes -= 1;
    };
    let per_head = total_price/num;

    document.getElementById("total").innerText = total_price;
    document.getElementById("each").innerText = per_head;
}
document.getElementById("btn").addEventListener("click",bill_splitter);