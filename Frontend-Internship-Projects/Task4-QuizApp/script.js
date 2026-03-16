const questions = [

{
question: "Which language is used for styling web pages?",
options: ["HTML", "CSS", "Python", "Java"],
answer: 1
},

{
question: "Which language runs in the browser?",
options: ["Java", "C", "Python", "JavaScript"],
answer: 3
},

{
question: "Which tag is used for images in HTML?",
options: ["<img>", "<image>", "<pic>", "<src>"],
answer: 0
}

];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const opt0 = document.getElementById("opt0");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const result = document.getElementById("result");

function loadQuestion(){

let q = questions[currentQuestion];

questionEl.textContent = q.question;

opt0.textContent = q.options[0];
opt1.textContent = q.options[1];
opt2.textContent = q.options[2];
opt3.textContent = q.options[3];

}

loadQuestion();

document.getElementById("nextBtn").addEventListener("click", function(){

let answers = document.getElementsByName("answer");
let selected = -1;

answers.forEach((a,index)=>{
if(a.checked){
selected=index;
}
});

if(selected === -1){
alert("Please select an answer!");
return;
}

if(selected === questions[currentQuestion].answer){
score++;
}

currentQuestion++;

answers.forEach(a=>a.checked=false);

if(currentQuestion < questions.length){

loadQuestion();

}else{

document.querySelector(".quiz-container").innerHTML =
"<h2>Your Score: "+score+"/"+questions.length+"</h2>";

}

});