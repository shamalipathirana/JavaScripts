//BMI with objects

var Kasun = new Object();
var Chamal = new Object();
//Add properties
Kasun.fullName =prompt("Enter Kasun's Full Name:");
Kasun.mass= prompt("Enter Kasun's mass: ");
Kasun.height= prompt("Enter Kasun's Height:");

Chamal.fullName =prompt("Enter Chamal's Full Name:");
Chamal.mass= prompt("Enter Chamal's mass: ");
Chamal.height= prompt("Enter Chamal's Height:");
//Add bmi() method for both
Kasun.bmi = Chamal.bmi = function(){
    this.bmiVal = this.mass / (this.height**2);
    return this.bmiVal;
}

console.log(Kasun);
console.log(Chamal);

//Find the highest bmi

if(Kasun.bmi() > Chamal.bmi()){
    alert(Kasun.fullName +'has the highest BMI '+ Kasun.bmiVal);
}
else if(Kasun.bmi() < Chamal.bmi()){
    alert(Chamal.fullName +'has the highest BMI '+ Chamal.bmiVal);
}
else{
    alert(Chamal.fullName +'and '+Kasun.fullName+'has the same BMI '+ Chamal.bmiVal);
}
