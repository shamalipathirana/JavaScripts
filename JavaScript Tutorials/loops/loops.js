//loops
//......for loop......
for(var i = 0;i < 10;i++){
    console.log(i);
}

//Irerare an array
var student = ['Nimal','Kasun','Nipuna','Tharindu'];
for(var i=0;i<student.length;i++){
    console.log(student[i]);
}
//for in loop
var person = {
    fname:"chamara",
    lname:'perera',
    age:25
};
var i;
for(i in person){
    console.log(person[i]);
}
//for of loop
var fullName = 'chamara perera';
var j;
for(j of fullName){
    console.log(j);
}


//while loop
var marks = [33,55,66,88,22];
var k = 0;
while(k < marks.length){
    console.log(marks[k]);
    k++;
}

//Do while loop
var m=10;
do{
    console.log(m);
    m--;
}
while(m>=1);

//continue & break

var data = ['saman','galle',1996,'maths','chocolate'];

//continue statement

for(var i=0;i<data.length;i++){
    if(typeof(data[i]) !== 'string'){
        continue;
        //console.log(data[i]);
    }
    console.log(data[i]);

}
//break
for(var i=0;i<data.length;i++){
    if(typeof(data[i]) !== 'string'){
        break;
        //console.log(data[i]);
    }
    console.log(data[i]);

}