
console.dir(document);

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
