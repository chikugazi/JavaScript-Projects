function toggle(){
    let heading = document.getElementById("heading").innerHTML;

    if(heading==="Hello World")
    {
        document.getElementById("heading").innerHTML = "Javascript";
    }
    else{
        document.getElementById("heading").innerHTML = "Hello World";
    }
}

document.getElementById("btn").addEventListener("click",toggle);