//...................Javascript Scope............
//...............................................

/*local & global*/

//......Local Variables.......
function addNum(){
    var a=10;
    var b=20;
    console.log(a+b);

}

addNum();
//console.log(a);

//Global Variables

var subject = 'maths';
function mySub(){
    console.log("my fav sub is "+subject);
    subject = 'science';
}

mySub();
mySub();


