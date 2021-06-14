//Define an array
var students = ['Ruwan','Nimal','Kasuni','Chamodi','Anuki'];

var marks = new Array(60,55,70,48,90);

//print Array
console.log(students);
console.log(students.length);
console.log(students[3]+ ' got '+marks[3]+' marks for maths.');

//Array mutation

students[3]= 'sanduni';
console.log(students);

//Different data types in an array
var std1 = ['kamal','perera',22,'mathugama',true];
console.log(typeof(std1[1]));

//Add elements
std1.push('green');
std1.unshift('Mr');
console.log(std1);

//Remove elements
std1.pop();
console.log(std1);
std1.shift(std1);
console.log(std1);

//Get index of an elements

console.log(std1.indexOf(22));

var isAgriStudent = std1.indexOf('Agri') == -1 ? std1[0]+' is not a agri student' : std1[0]+' is a agri student'

console.log(isAgriStudent);