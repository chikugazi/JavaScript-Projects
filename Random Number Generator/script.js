document.getElementById("btn").addEventListener("click",()=>{
    let x = Math.floor((Math.random()*100)+1);
    document.getElementById("result").innerText = x;
})