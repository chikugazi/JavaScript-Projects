function divisibility_check(){
    let num = document.getElementById("num").value;
    let arr = [];
    while (num>0){
        let x = Number(prompt("Enter the element"));
        // document.getElementById("display").innerText = x;
        // if (x%3==0 && x%2!=0){
        //     document.getElementById("result").innerText = x;
        // }
        arr.push(x);
        num -= 1; 
    }
    filtered_array = []
    document.getElementById("display").innerHTML = arr; 
    for(let i=0;i<arr.length;i++){
        if(arr[i]%3==0 && arr[i]%2!=0){
            filtered_array.push(arr[i]);
        }
    }
    console.log(filtered_array)
    document.getElementById("result").innerHTML = filtered_array;
}

document.getElementById("btn").addEventListener("click",divisibility_check);