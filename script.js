function calculateBMI(){
    let height =
    document.getElementById('height').value;
    let weight =
    document.getElementById('weight').value;
    if(height ===''|| weight ===''){
        alert("Please fill in both field!");
        return;
    }
    height=height/100;  //convert height from cm to meters
    let bmi=weight/(height*height);
    bmi=bmi.toFixed(2); //round 2 decimal places
    document.getElementById('bmi-result').innerText=bmi;
    let category= '';
    if(bmi<18.5){
       category='Underweight (Khaya piya karo)';
     } else if (bmi>=18.5&&bmi<24.9)
  {
     category='Normal Weight';
     } else if (bmi>=25 && bmi<29.9){
    category='Overweight (Thoda kam khaya piya karo)';
     } else {
    category='Obesity (Mota kitna khata hai tu)';
     }
document.getElementById('bmi-category').innerText=category;
}

