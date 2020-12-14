var readlineSync=require("readline-sync");
var chalk = require('chalk');

var score=0;

console.log(chalk.bgBlueBright(" Movie QUIZ \n\n"));

var user=readlineSync.question("Please Enter Your Name?: ");
console.log(chalk.yellow("WELCOME! "+user));

console.log(chalk.cyan("\nRULE: Every CORRECT answer rewards 2 points & WRONG answer deduct 1 point"));
console.log(chalk.bgMagenta("\nLet's See how much you know about Movies \nLet's GOOOO!!!!\n\n"));

function play(question,answer)
{
var userAnswer=readlineSync.question(question);
if(userAnswer===answer)
{
  score=score+2;
 console.log(chalk.green("CORRECT Answer :) ") +score);
}
else
{
  score=score-1;
  console.log(chalk.red("WRONG Answer !!!") +score);
}


}
var questions=[
  {
    question:"1.what is Sharuk khan's fist movie? \na)DDLG\tb)Dil To Pagal Hai\nc)Kuch Kuch Hota Hai\td)Deewana\nAns: ",
    answer:"d"
    },
  {
    question:"2.who is the hero of the movie  bahubali? \na)Prabhas\tb)Ramcharan\nc)Venkatesh\td)Pawan kalyan\nAns: ",
    answer:"a"},
  {
    question:"3.who is the hero of the movie kabir singh? \na)varun dhawan\tb)kartik aaryan\nc)Shahid kapoor\td)Tiger shroff\nAns: ",
    answer:"c"},
  
  {
    question:"4.Who is the director of the film Bahubali? \na)Raghavendra rao\tb)Rajamouli\nc)Anil ravapudi\td)Boyapati srinu\nAns: ",
    answer:"b"},
  {
    question:"5.What is Rajamouli's next movie?\na)RRR\tb)Salaar\nc)Aadhipurush\td)KGF-chapter 2\nAns: ",
    answer:"a"},
  

]

for(i=0;i<questions.length;i++)
{
  play(questions[i].question,questions[i].answer);
}

console.log(chalk.red("\n\n Good!! your final score is: "+ score ));

var Players=[
  {
    name:"Manzit",
    scored:10
  },
  {
    name:user,
    scored:score
  }

];

console.log("\n-----------------------------------");
if(score===Players[0].scored)
console.log(chalk.yellow("hurray!!! you created new highscore"));
console.log("-----------------------------------\n");


console.log("HIGHSCORE\n");

function higher(name,scored)
{
  
  console.log(name + " : " + scored);
}


for(i=0;i<Players.length;i++)
{
  higher(Players[i].name,Players[i].scored);
}
