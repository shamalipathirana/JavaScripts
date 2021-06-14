//......Introduction to function

//Define functions
//without returns

function addNumbers(num1,num2){
    var ans= num1+num2
    console.log("Addition: " + ans);
}
//with return

function subNumbers(num1,num2){
    return num1-num2;
}
//calling functions
addNumbers(5,7);
var sub = subNumbers(20,7);
console.log(sub);

//.................

function calAge(birthYear){
    var age=2021-birthYear;
    //console.log('Kamal is '+age +' years old.');
    return age;
}

calAge(1976);

//Define

function retiringYear(firstName,birthYear){
    var Age = calAge(birthYear);
    var retire = 60-Age;
    console.log(firstName+' retires in '+retire+' years in ' +(birthYear+Age+retire));

}

retiringYear("Kamal", 1976);

