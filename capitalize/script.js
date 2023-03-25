function Capitalize(){
    let word = document.getElementById("word").value;
    let result = document.getElementById("result");
    result.innerText = word.charAt(0).toUpperCase() + word.slice(1);
    console.log(result.innerText);
}