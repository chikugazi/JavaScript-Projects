function CountVowels(){
    let fullName = document.getElementById("name").value;
    let result = document.getElementById("result");

    let count = 0;
    for (let i=0;i<fullName.length;i++)
    {
        if(fullName[i]=='a' || fullName[i]=='e' || fullName[i]=='i' || fullName[i]=='o' || fullName[i]=='u' || fullName[i]=='A' || fullName[i]=='E' || fullName[i]=='I' || fullName[i]=='O' || fullName[i]=='U'){
            count = count+1;
        }

    }
    result.innerText = count;
}

document.getElementById('submit-btn').addEventListener("click", CountVowels);