
function generate(){
    let first_color = document.getElementById("first-color").value;
    let second_color = document.getElementById("second-color").value;
    let submit_button = document.getElementById("btn");
    let reset_btn = document.getElementById("btn2");

    if(first_color=="red" && second_color=="blue" || first_color=="blue" && second_color=="red"){
        body.style.background = "purple";
    }
    else if(first_color=="red" && second_color=="yellow" || first_color=="yellow" && second_color=="red"){
        body.style.background = "orange";
    }
    else if(first_color=="blue" && second_color=="yellow" || first_color=="yellow" && second_color=="blue"){
        body.style.background = "green";
    }
    else{
        alert("invalid color");
    }
};

function reset(){
    
    console.log("hi");
    body.style.background="white";

};