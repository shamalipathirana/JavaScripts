
/*console.dir(document);

//get properties

console.log(document.URL);
console.log(document.charset);
console.log(document.lastModified);
console.log(document.title);

console.log(document.head);
console.log(document.body);

//change values
document.title="Document Object Model";
console.log(document.title);

//...............................

//-------Select elements using ID
console.log(document.getElementById('frmt'));
var fromTitle=document.getElementById('frmt');
console.log(fromTitle);

//..textContent,innerText,innerHtml
fromTitle.textContent='Add Shopping Items';
fromTitle.innerText='Shopping  Items';
fromTitle.innerHTML='<i>Hello </i>Add Items';

console.log(fromTitle.textContent);

//styling elements
var navigation=document.getElementById('navbar');
navigation.style.backgroundColor="yellow";
navigation.style.color="blue";

//..........select elements using class names
var items=document.getElementsByClassName('items');
items[0].textContent='Blouse';
items[1].textContent='T-Shirts';
items[2].textContent='Shirts';
items[3].textContent='Jeans';
items[4].textContent='Frocks';

//chane back color of all the list
items[0].style.backgroundColor="#DC143C";
items[1].style.backgroundColor="#008B8B";
items[2].style.backgroundColor="#FF7F50";
items[3].style.backgroundColor="#FF4500";
items[4].style.backgroundColor="#00FF7F";

//Select elements using tag name

var li=document.getElementsByTagName('li');
console.log(li);
li[2].style.backgroundColor="#800080";

//select elements using query selector
var hd=document.querySelector('#navbar');
hd.style.border='solid 5px #000';

//Mix selectors
var ite=document.querySelector('div .frm #frmt');
ite.style.color='green';

//select elements usinh query selector all
var dv=document.querySelectorAll('div');
console.log(dv);

//pseudo classes
//grab all the odd list  items
*/
var odd=document.querySelectorAll('li:nth-child(odd)');
console.log(odd);
//odd.style.backgroundColor="#DC143C";
var even=document.querySelectorAll('li:nth-child(even)');

for(var i of odd){
    i.style.backgroundColor="#DC143C";
}
for(var j of even){
    j.style.backgroundColor="#FF4500";
}


