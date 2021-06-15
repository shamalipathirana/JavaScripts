//Exercise 1

//BMI comparison

/*Shamali and Anuki are trying to compare their BMI
BMI=weight/height^2
(weight in kg and height in meter */

   //Shamali's BMI
   var weight,height,bmis,bmik;

   weight=prompt("Shamli's mass:");
   height=prompt("Shamali's height: ");
   
   bmis=weight / (height * height);

   //Anuki's BMI
   weight=prompt("Anuki's mass:");
   height=prompt("Anuki's height: ");
   
   bmia=weight / (height * height);

   var isTrue=(bmis > bmik);
   alert("Shamali's BMI greater than Anuki's BMI???" + isTrue);

