//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
//Hi Sharanya! Ok so you will need to make 
//variables that match the names of your functions 
//I commented out lines 11-14 becuase they are not variables.
//variables names can not have spaces. 
//you also will need to 
// put in 
var questionCount = 0;
var result1Score = 0;
var result2Score = 0;
var result3Score = 0;
var result4Score = 0;

 // var result1 You are a very outgoing and a comprehensive person = 0;
 //  var result 2 You are a very outgoing and critically thinking person= 0;
 //  var result3 You are a very reserved and critically thinking person = 0;
 //  var result4You are a very reserved and a comprehensive person= 0;





//#TODO: Use the DOM to create variables for the first quiz question.

//need to make sure the variable name matches the id name.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");



//#TODO: Add Event Listeners to your answer choice variables.
// element.addEventListener(event, function);

q1a1.addEventListener("click", result1);
q1a2.addEventListener("click", result2);
q1a3.addEventListener("click", result3);
q1a4.addEventListener("click", result4);

 q2a1.addEventListener("click", result1);
  q2a2.addEventListener("click", result2);
  q2a3.addEventListener("click", result3);
  q2a4.addEventListener("click", result4);

 q3a1.addEventListener("click", result4);
  q3a2.addEventListener("click", result1);
  q3a3.addEventListener("click", result3);
  q3a4.addEventListener("click", result2);

 q4a1.addEventListener("click", result1);
  q4a2.addEventListener("click", result2);
  q4a3.addEventListener("click", result3);
  q4a4.addEventListener("click", result4);

 q5a1.addEventListener("click", result1);
  q5a2.addEventListener("click", result2);
  q5a3.addEventListener("click", result4);
  q5a4.addEventListener("click", result3);


//write functions for result1, result2, result3, result4

function result1() {
  result1Score += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}

function result2() {
  result2Score += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result3() {
  result3Score += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}
function result4() {
  result4Score += 1;
  questionCount += 1;
  if (questionCount >= 5) {
    updateResult();
  }
}

function updateResult(){
  if (result3Score >= 3){
result.innerHTML = "you are a very reserved and a critically thinking person";
 }
 else if(result4Score >=3){
result.innerHTML = "you are a very reserved and a comprehensive person";
 }
 else if(result2Score >=3){
result.innerHTML = "you are a very outgoing and critically thinking person";
 }
 else if (result1Score >= 3){
result.innerHTML = "you are a very outgoing and comprehensive person";
 }
 else{
  result.innerHTML = "You are a person with many qualities. Outgoing at times and reserves at others. You use your knowledge well, beign comprehensive and a critical thinker at times.";
 }

}

//#TODO: Define quiz functions here
//   function result1() {
//   newyorkScore += 1;
//   questionCount += 1;
//     alert("One Point to you are very outgoing and comprehensive person" );
//     if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Paris() {
//   parisScore += 1;
//   questionCount += 1;
//       alert("One Point to you are a very outgoing and critically thinking person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Sydney() {
//   sydneyScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very reserved and a critically thinking person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Zurich() {
//   zurichScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very reserved and a comprehensive person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }


// function Beach() {
//   beachScore += 1;
//   questionCount += 1;
//   alert("One Point to you are very outgoing and comprehensive person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function City() {
//   cityScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very outgoing and critically thinking person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Mountains() {
//   mountainsScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very reserved and a critically thinking person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Home() {
//   homeScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very reserved and a comprehensive person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }
  

// function Dark() {
//   darkScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very reserved and a comprehensive person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Heights() {
//   heightsScore += 1;
//   questionCount += 1;
//   alert("One Point to you are very outgoing and comprehensive person ");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function People() {
//   peopleScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very reserved and a critically thinking person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Animals/Insects() {
//   animals/insectsScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very outgoing and critically thinking person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }


// function Party() {
//   partyScore += 1;
//   questionCount += 1;
//   alert("One Point to you are very outgoing and comprehensive person ");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Going to a resturant() {
//   goingtoaresturantScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very outgoing and critically thinking person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Beign Alone() {
//   beignaloneScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very reserved and a critically thinking person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Beign Home() {
//   beignhomeScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very reserved and a comprehensive person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }
  


// function Math() {
//   mathScore += 1;
//   questionCount += 1;
//   alert("One Point to you are very outgoing and comprehensive person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Science() {
//   scienceScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very outgoing and critically thinking person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function English() {
//   englishScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very reserved and a comprehensive person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }

// function Social Studies() {
//   socialstudiesScore += 1;
//   questionCount += 1;
//   alert("One Point to you are a very reserved and a critically thinking person");
//   if (questionCount >= 5){
//       updateResult();
//   }
// }
  


