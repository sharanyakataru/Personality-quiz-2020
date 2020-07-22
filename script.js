//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var result1Score = 0;

 var You are a very outgoing and a comprehensive person = 0;
  var You are a very outgoing and critically thinking person= 0;
  var You are a very reserved and critically thinking person = 0;
  var You are a very reserved and a comprehensive person= 0;





//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q1a1 = document.getElementById("q2a1");
var q1a2 = document.getElementById("q2a2");
var q1a3 = document.getElementById("q2a3");
var q1a4 = document.getElementById("q2a4");

var q1a1 = document.getElementById("q3a1");
var q1a2 = document.getElementById("q3a2");
var q1a3 = document.getElementById("q3a3");
var q1a4 = document.getElementById("q3a4");

var q1a1 = document.getElementById("q4a1");
var q1a2 = document.getElementById("q4a2");
var q1a3 = document.getElementById("q4a3");
var q1a4 = document.getElementById("q4a4");

var q1a1 = document.getElementById("q5a1");
var q1a2 = document.getElementById("q5a2");
var q1a3 = document.getElementById("q5a3");
var q1a4 = document.getElementById("q5a4");






//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", New York);
q1a2.addEventListener("click", Paris);
q1a3.addEventListener("click", Sydney);
q1a4.addEventListener("click", Zurich);

 q2a1.addEventListener("click", Beach);
  q2a2.addEventListener("click", City);
  q2a3.addEventListener("click", Mountains);
  q2a4.addEventListener("click", Home);

 q3a1.addEventListener("click", Dark);
  q3a2.addEventListener("click", Heights);
  q3a3.addEventListener("click", People;
  q3a4.addEventListener("click", Animals/Insects);

 q4a1.addEventListener("click", Party);
  q4a2.addEventListener("click", Going to a resturant);
  q4a3.addEventListener("click", Beign alone);
  q4a4.addEventListener("click", Beign home);

 q5a1.addEventListener("click", Math);
  q5a2.addEventListener("click", Science);
  q5a3.addEventListener("click", English);
  q5a4.addEventListener("click", Social Studies);





//#TODO: Define quiz functions here
  function New York() {
  newyorkScore += 1;
  questionCount += 1;
    alert("One Point to you are very outgoing and comprehensive person" );
    if (questionCount >= 5){
      updateResult();
  }
}

function Paris() {
  parisScore += 1;
  questionCount += 1;
      alert("One Point to you are a very outgoing and critically thinking person");
  if (questionCount >= 5){
      updateResult();
  }
}

function Sydney() {
  sydneyScore += 1;
  questionCount += 1;
  alert("One Point to you are a very reserved and a critically thinking person");
  if (questionCount >= 5){
      updateResult();
  }
}

function Zurich() {
  zurichScore += 1;
  questionCount += 1;
  alert("One Point to you are a very reserved and a comprehensive person");
  if (questionCount >= 5){
      updateResult();
  }
}


function Beach() {
  beachScore += 1;
  questionCount += 1;
  alert("One Point to you are very outgoing and comprehensive person");
  if (questionCount >= 5){
      updateResult();
  }
}

function City() {
  cityScore += 1;
  questionCount += 1;
  alert("One Point to you are a very outgoing and critically thinking person");
  if (questionCount >= 5){
      updateResult();
  }
}

function Mountains() {
  mountainsScore += 1;
  questionCount += 1;
  alert("One Point to you are a very reserved and a critically thinking person");
  if (questionCount >= 5){
      updateResult();
  }
}

function Home() {
  homeScore += 1;
  questionCount += 1;
  alert("One Point to you are a very reserved and a comprehensive person");
  if (questionCount >= 5){
      updateResult();
  }
}
  

function Dark() {
  darkScore += 1;
  questionCount += 1;
  alert("One Point to you are a very reserved and a comprehensive person");
  if (questionCount >= 5){
      updateResult();
  }
}

function Heights() {
  heightsScore += 1;
  questionCount += 1;
  alert("One Point to you are very outgoing and comprehensive person ");
  if (questionCount >= 5){
      updateResult();
  }
}

function People() {
  peopleScore += 1;
  questionCount += 1;
  alert("One Point to you are a very reserved and a critically thinking person");
  if (questionCount >= 5){
      updateResult();
  }
}

function Animals/Insects() {
  animals/insectsScore += 1;
  questionCount += 1;
  alert("One Point to you are a very outgoing and critically thinking person");
  if (questionCount >= 5){
      updateResult();
  }
}


function Party() {
  partyScore += 1;
  questionCount += 1;
  alert("One Point to you are very outgoing and comprehensive person ");
  if (questionCount >= 5){
      updateResult();
  }
}

function Going to a resturant() {
  goingtoaresturantScore += 1;
  questionCount += 1;
  alert("One Point to you are a very outgoing and critically thinking person");
  if (questionCount >= 5){
      updateResult();
  }
}

function Beign Alone() {
  beignaloneScore += 1;
  questionCount += 1;
  alert("One Point to you are a very reserved and a critically thinking person");
  if (questionCount >= 5){
      updateResult();
  }
}

function Beign Home() {
  beignhomeScore += 1;
  questionCount += 1;
  alert("One Point to you are a very reserved and a comprehensive person");
  if (questionCount >= 5){
      updateResult();
  }
}
  


function Math() {
  mathScore += 1;
  questionCount += 1;
  alert("One Point to you are very outgoing and comprehensive person");
  if (questionCount >= 5){
      updateResult();
  }
}

function Science() {
  scienceScore += 1;
  questionCount += 1;
  alert("One Point to you are a very outgoing and critically thinking person");
  if (questionCount >= 5){
      updateResult();
  }
}

function English() {
  englishScore += 1;
  questionCount += 1;
  alert("One Point to you are a very reserved and a comprehensive person");
  if (questionCount >= 5){
      updateResult();
  }
}

function Social Studies() {
  socialstudiesScore += 1;
  questionCount += 1;
  alert("One Point to you are a very reserved and a critically thinking person");
  if (questionCount >= 5){
      updateResult();
  }
}
  
