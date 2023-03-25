function checkpassword(){
    let Password = document.getElementById("Password").value;
    let confrm_password = document.getElementById("confrm-password").value;
    let btn = document.getElementById("btn");
    console.log(Password,confrm_password);
    let message = document.getElementById("message");

    if(Password.length!=0){
        if(Password==confrm_password){
            message.textContent = "Password matched";
            message.style.background="green";
            message.style.color = "white";
        }
        else{
            message.textContent= " Password didn't match";
            message.style.background="red";
            message.style.color = "white";
        }

    }
    else{
        alert("Password cannot be empty");
    }
}