var chalk = require('chalk');
var readlineSync = require('readline-sync');
console.log(chalk.red.bold.underline("Welcome to the React.js Quiz\n"));

userName=readlineSync.question(chalk.yellow("What is your name? \n"));
console.log(chalk.bgRed.bold("Welcome to the React.js Quiz "+userName));

console.log(chalk.bgCyan("Let's get started. \n"+userName));

var score=0;

var questionOne={
  question: "React is mainly used for building?\na.Database\nb.User Interface\nc.Design Platform\nd.Connetivity",
  answer: "b"
}
var questionTwo={
  question: "The lifecycle methods are mainly used for?\na.keeping track of event history\nb.enhancing components\nc.freeing up resources\nd.none of the above",
  answer: "c"
}
var questionThree={
  question: "Arbitrary inputs of components are called?\na.Keys\nb.Props\nc.Elements\nd.Ref",
  answer: "b"
}
var questionFour={
  question: "_________ can be done while more than one element needs to be returned from a component.\na.Abstraction\nb.Packing \nc.Insulation\nd.Wrapping",
  answer: "d"
}
var questionFive={
  question: "In JSX most of the errors can be caught during?\na.Interpretation\nb.Execution\nc.Compilation \nd.Build",
  answer: "c"
}
var questionSix={
  question: "JSX is faster because it performs ____________ while compiling code to JavaScript\na.Modification\nb.Compression\nc.Optimization\nd.Encryption",
  answer: "c"
}
var questionSeven={
  question: "React considers everything as?.\na.User interface\nb.elements\nc.components \nd.Objects",
  answer: "c"
}
var questionEight={
  question: "React supports all the syntax of ?\na.ES6\nb.Redux\nc.None of options \nd.Native Java",
  answer: "a"
}
var questionNine={
  question: "How can we prevent default behavior in React?\na.None of the options\nb.using revokeDefault()\nc.Using preventDefault() \nd.using avoidDefault()",
  answer: "c"
}
var questionTen={
  question: "Function that does not change its results for the same set of inputs are called?\na.Pure functions\nb.Impure Functions\nc.Both \nd.None of above",
  answer: "a"
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive,questionSix,questionSeven,questionEight,questionNine,questionTen];

var highScore=[
  {name: "Noob1", score: "8"},
  {name: "Noob2", score: "5"}
]

function check(question,answer){
  console.log(chalk.bold.rgb(176,196,222)("Q"+(i+1)+"."+questions[i].question));
  console.log("\n");

  userAnswer=readlineSync.question(chalk.bold.rgb(119,136,153)("Type your answer: "));
  if(userAnswer===answer){
    score=score+1;
    console.log(chalk.green.bold("Correct"));
  }
  else{
    score=score-1;
    console.log(chalk.red.bold("Wrong"));
  }
  console.log(chalk.bgRed.bold("Current Score is "+score));
}

for(var i=0;i<questions.length;i++){
  check(questions[i].question,questions[i].answer);
}

console.log(chalk.bold.rgb(221,160,221)("Your Final score is:", score));

console.log(chalk.keyword('purple').bold("\nLeaderboard"));
var initial_score=false;
for(let i=0; i<highScore.length; i++){
  console.log(chalk.keyword('orange').bold(highScore[i].name+" : " +highScore[i].score));

  if(score>=highScore[i].score){
    initial_score=true;
  }
}


var posnInsert =0;
if(initial_score){
  console.log(chalk.bold.keyword('red')("\nCongratulations "+userName+", you have beaten the high Score"));
  
  console.log(chalk.keyword('green').bold("\nLeaderboard"));
  
  if(score>=highScore[0].score){
    pos=0;
  }
  else if(score>=highScore[1].score){
    pos=1;
  }
  highScore.splice(pos, 0, {name:`${userName}`, score:`${score}`});
  
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.keyword('yellow').bold(highScore[i].name+" : " +highScore[i].score));
  }

}


console.log(chalk.bold.rgb(240,128,128)("Hope you Enjoyed the quiz!"));