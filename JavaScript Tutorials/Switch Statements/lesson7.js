

var empName= "Shamali";
var jobRole = "webdeveloper";

switch(jobRole.toLocaleLowerCase()) {
    case 'teacher':
        console.log(empName + ' is a teacher');
        break;
    case 'doctor':
        console.log(empName+ ' is a doctor');
        break;
    case 'webdeveloper':
        console.log(empName+ ' is a web developer');
        break;
    default:
        console.log(empName +' does somthing else');
        break;

}

//.....................
 var age= 20;

 switch(true){

case  age < 20:
    console.log(empName + 'is under age');
    break;
case age >= 20 && age <= 30:
    console.log(empName + 'is in perfect age');
    break;
default:
    console.log(empName + 'is too old');
 }