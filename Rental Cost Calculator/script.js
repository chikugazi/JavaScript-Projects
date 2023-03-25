function calculate_rent(){
    let type = document.getElementById("type").value;
    let economy = document.getElementById("economy").value;
    let middlesize = document.getElementById("midsize").value;
    let luxury = document.getElementById("luxury").value;
    let days = document.getElementById("num").value;

    let total_rent = 0;

    if(type=="Economy"){
        total_rent = 4000*days;
    }
    else if(type=="MidSize"){
        total_rent = 10000*days;
    }
    else if(type=="Luxury"){
        total_rent = 20000*days;
    }
    document.getElementById("result").innerText = total_rent;


}

document.getElementById("btn").addEventListener("click",calculate_rent);