const editData = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    a: "<script></script>",
    b: "<html></html>",
    c: "<js></js>",
    d: "<scripting></scripting>",
    correct: "a",
  },
  {
    question: "Where is the correct place to insert a JavaScript? ",
    a: "<head></head>",
    b: "<p></p>",
    c: "<container></container>",
    d: "<section></section>",
    correct: "a",
  },
  {
    question: "How do you write Hello World in an alert box? ",
    a: "alert('hello world')",
    b: "alertBox('hello world')",
    c: "msg('hello world')",
    d: "msgBox('hello world')",
    correct: "a",
  },
  {
    question: "How do you create a function in JavaScript? ",
    a: "function",
    b: "fonksion",
    c: "func",
    d: "myFunction",
    correct: "a",
  },
];

const quizData = editData;

const aq = document.getElementById("aq");
const answer = document.querySelectorAll(".answer");
const bq = document.getElementById("bq");
const question = document.getElementById("question");
const cq = document.getElementById("cq");
const dq = document.getElementById("dq");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const sonuc = document.querySelector(".sonuc");

let startQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  function getAnswer() {
    const gotAnswer = document.querySelectorAll(".answer");
    let answer = undefined;

    gotAnswer.forEach((gotAnswe) => {
      if (gotAnswe.checked) {
        answer = gotAnswe.id;
      }
    });

    return answer;
  }

  const setQuizData = quizData[startQuiz];

  question.innerText = setQuizData.question;
  aq.innerText = setQuizData.a;
  bq.innerText = setQuizData.b;
  cq.innerText = setQuizData.c;
  dq.innerText = setQuizData.d;

  btn.addEventListener("click", () => {
    const answer = getAnswer();
    startQuiz++;
    if (startQuiz < quizData.length) {
      loadQuiz();
    } else {
      container.style.display = "none";
      sonuc.innerHTML = `Correct Answers / Questions <h1>${score} / 3</h1>`;
    }

    if (answer === quizData[startQuiz].correct) {
      score++;
    }
  });
}
