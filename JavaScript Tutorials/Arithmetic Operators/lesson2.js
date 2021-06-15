//---single operators---

var myAge,yourAge,year,result;

myAge=25;
yourAge=20;
year=2021;

//----substraction----

result=year-myAge;
console.log('I was born in '+ result);

//........Addition.......
result=myAge+10;
console.log("My age after 10 yers="+result);

//Multiplication
result=myAge*yourAge;
console.log("Product of my age and your age="+result);

//....Division
result=myAge/yourAge;
console.log("Divison of our ages="+result);

//....Modu;us......
console.log('Modulus of our ages='+(myAge%yourAge));

//Exponentiation
console.log("Exponent of my age="+(myAge**2));

//....Increment.........

//Post Increment
console.log(myAge++);
console.log(myAge);

//Preincrement
console.log(++myAge);
console.log(myAge);

//post dectriment
console.log(myAge--);
console.log(myAge);

//pre decriment
console.log(--myAge);
console.log(myAge);

//operator Precedence

var cal=(20+30)/10+4.5-2*4**2;
console.log(cal);

//........Multiple operators....

var ans1,ans2;
ans1=ans2=(((30+40-29)*2)/8)**4;
console.log(ans1);
console.log(ans2);

