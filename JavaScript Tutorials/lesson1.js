//Create Variables
var firstName="Shamali";
var lastName="Pathirana";
var age=25;
var isOk=true;
var job,height;
//print only variable

console.log(firstName);

//print the variable with a string
//Type coerction
console.log("My name is "+firstName +" "+lastName );
console.log('My age is '+age);
console.log('It is '+isOk);

//Get Variable type

console.log(typeof(lastName));

//Define
job="Developer";

//Variable Mutation

lastName="Prasanthika";
console.log('My name is '+firstName+' '+lastName+'.I am a '+job);


//Display and alert

alert('My name is '+firstName+'.I am '+age+' years old.');

//Get user input

height=prompt('What is your height');
alert('My height is '+height+ ' feet.');

