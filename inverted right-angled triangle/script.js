function inverted_pattern(){
    let n = document.getElementById("number").value;
    let display = document.getElementById("display");
    let string = "";

    for (let i = 0; i < n; i++) {
        // printing star
        for (let k = 0; k < n - i; k++) {
          string += "*";
        }
        string += "\n";
      }
      
      document.getElementById("display").innerText = string;

}
