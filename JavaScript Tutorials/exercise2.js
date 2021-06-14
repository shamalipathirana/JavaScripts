//winnig team .............

var score1,score2,score3;

var averageSri,averageEng;

//SriLanka Avaerage

score1 = parseInt(prompt('First match score of team SriLanka'));
score2 = parseInt(prompt('Second match score of team SriLanka'));
score3 = parseInt(prompt('Third match score of team SriLanka'));


averageSri = (score1+score2+score3)/3;

console.log(averageSri);


//England Avaerage

score1 = parseInt(prompt('First match score of team Eng'));
score2 = parseInt(prompt('Second match score of team Eng'));
score3 = parseInt(prompt('Third match score of team Eng'));


averageEng = (score1+score2+score3)/3;

console.log(averageEng);

//Find the winner

if(averageSri > averageEng){
    alert("Srilankan team is the winner");
}
else if (averageSri > averageEng){
    alert("England team is the winner");
}
else{
    alert("Match is draw");
}

