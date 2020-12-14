var readLineSync=require('readline-sync')

var name = readLineSync.question('Enter your name ');


console.log('HELLO ' +name+ ", PLEASE READ THE INSTRUCTIONS BELOW ")
console.log('You will be awarded +1 for every correct answer and -1 for every incorrect answer')

var score = 0;

// function to check the answer

function play(a,b){
  UserAns=readLineSync.question(a);
  if(UserAns.toUpperCase() === b){
    console.log('CORRECT')
    console.log("--------")
    score=score +1 ;
     console.log('Score is ' +score)
  }
  else{
    console.log('INCORRECT');
    console.log("--------")
    score =score -1;
     console.log('Score is ' +score)
  }
 
}


 var QuestionBank1=[{question:"What is my full name ? ",answer:"SPARSH SINGH RATHORE"},{question:"I am from which city ? ",answer:"LUCKNOW"},{question:"Who is my favourite cricketer ? ",answer:"ADAM GILCHRIST"} ,{question:"Who is my favourite WWE superstar ? ",answer:"RANDY ORTON"}]


 for(var i =0;i<QuestionBank1.length;i++){
   CurrentQuestion=QuestionBank1[i]
   play(CurrentQuestion.question,CurrentQuestion['answer'])
 }
 console.log('----------')
 console.log('Your final score is ' +score)










 
