//...............Funcion Expressions


var profession= function(job,firstName){
    switch(job){
        case 'doctor':
            return firstName + ' is treating patients.';
        case 'doctor':
            return firstName + ' is teaching students.';
         case 'doctor':
            return firstName + ' is working with  buildings.';
        default:
            return firstName + ' is doing something else.';
    }
}

//calling
console.log(profession('doctor','Kasun'));