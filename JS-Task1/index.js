function calculate() {
    
    
    const mul = 5;
    const shiping = 7;
    let name1 = document.getElementById("name").value;
    let first=name1.split(" ");
    
    if (name1.trim().length!=0) {
        
   
    let total_letters = +name1.trim().length;
    let sub_total=total_letters*mul;
    let grand_total=sub_total+shiping;
    document.getElementById("table").style.display = 'block';
    document.getElementById("Fname").textContent = name1;
    document.getElementById("Tletter").textContent = total_letters;
    document.getElementById("sub").textContent="$"+sub_total;
    // document.getElementById("ship").textContent="$"+ship;
    document.getElementById("total").textContent="$"+grand_total;
  
    document.getElementById("heading").textContent="Hello "+first[0]+", please check your orders"
}
else
alert("please enter name");
}