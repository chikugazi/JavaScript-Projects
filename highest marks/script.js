function calculate(){
  let mark1 = document.getElementById("first_mark").value;
  let mark2 = document.getElementById("second_mark").value;
  let mark3 = document.getElementById("third_mark").value;
  let mark4 = document.getElementById("fourth_mark").value;
  let mark5 = document.getElementById("fifth_mark").value;



  const marks = [mark1,mark2,mark3,mark4,mark5];

  let highest = 0;
  for(let i = 0; i<marks.length;i++){
    if(marks[i]>highest){
      highest = marks[i];
    }
  }
document.getElementById("result").innerText = highest; 
}