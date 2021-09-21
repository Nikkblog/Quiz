const quizDb = [

    {
        Question: "Q1. What is the Full Form of JS?",
        a : "JavaScript",
        b : "JavaSuper",
        c : "JustScript",
        d : "JustSay",
        ans : "op1"
    },
    {
        Question: "Q2. What is the Full Form of HTML?",
        a : "HyperText Maching Language",
        b : "Hyper Transform Machine Language",
        c : "Hands Taken Male Learn",
        d : "HyperText Markup Language",
        ans : "op4"
    },
    {
        Question : "Q3. What is Full Form of CSS?",
        a : "Case Sensitive Style",
        b : "Cascading Style Sheet",
        c : "car Service Shop",
        d : "Common Storage Sensor",
        ans : "op2"
    },
    {
        Question : "Q4. What is the Full Form of HTTP?",
        a : "High Transfer Text Protocol",
        b : "Higher Transition Transport Permission",
        c : "Hyper Tension to Parents",
        d : "HyperText Transfer Protocol",
        ans : "op4"
    },
  

 
];
const ques = document.querySelector("#question");
const option1 = document.querySelector("#ans1");
const option2 = document.querySelector("#ans2");
const option3 = document.querySelector("#ans3");
const option4 = document.querySelector("#ans4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answers");
const scoreCard = document.querySelector("#scoreArea");


let quesCount = 0;
let score=0;

const loadQuestion = () => {
    ques.innerText = quizDb[quesCount].Question;
    option1.innerText = quizDb[quesCount].a;
    option2.innerText = quizDb[quesCount].b;
    option3.innerText = quizDb[quesCount].c;
    option4.innerText = quizDb[quesCount].d;
    
}

loadQuestion();
const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsEle) => {
        if(curAnsEle.checked){
            answer = curAnsEle.id;
        }
        
    })
    return answer;
}

const deselectAll = () => {
    answers.forEach((curAnsEle) => curAnsEle.checked = false);
}

submit.addEventListener('click', () => {    
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    console.log(quizDb[quesCount].ans);

    if(checkedAnswer === quizDb[quesCount].ans){
        score++;
    }
    console.log(score);

    quesCount++;
    deselectAll();

    if(quesCount < quizDb.length){
        loadQuestion();
    }
    else{
        scoreCard.innerHTML = `
        <h3> Your Score ${score} / ${quizDb.length} 🎉</h3>
        <button class="btn" onclick="location.reload()"> Play Again </button>`;

        scoreCard.classList.remove("scoreCard");
    }


})
