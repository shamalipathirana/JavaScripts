//Objects literals
var nimal = {
    firstName : 'Nimal',
    lastName :'Perera',
    age : 24,
    isMarried : false,
    job:'Developer',
    subjects : ['Java programming','web development','graphic design','database management'],
    degree:{
        name:'software Eng',
        duration: 4,
        credits : 120
    },
    projects :[
        {
            name:'Ecommerce App',
            technology : 'Flutter',
            version : 1.1

        },
        {
            name:'Music App',
            technology : 'Java',
            version : 1.2
        },
        {
        name:'Ecommerce App',
        technology : 'React',
        version : 1.1
        }
    ] ,
    //Method
    yearOfBirth : function(year){
        return year-this.age;

    }  
}

console.log(nimal);
console.log(nimal.firstName);
console.log(nimal['lastName']);

var x='age';
console.log(nimal[x]);
console.log(nimal.subjects);
console.log(nimal.subjects[2]);
console.log(nimal.degree.name);
console.log(nimal['degree']['credits']);
console.log(nimal.projects[1].technology);

console.log('Date of Birth :'+nimal.yearOfBirth(2021));


//Modify Values
nimal.job ='UI/UX Designer';
nimal.isMarried = true;

console.log(nimal);

//New object Syntax

var kasun = new Object();
//Add properties
kasun.firstName = 'Kasun';
kasun.lastName = 'Silva';
kasun['age'] = 30;

console.log(kasun);
