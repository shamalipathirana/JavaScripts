
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