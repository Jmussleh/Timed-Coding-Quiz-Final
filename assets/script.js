var Start = document.querySelector("#startbtn");
var Quiz = document.querySelector("QuizContainer");
var Question = document.querySelector("#Question");
var Answers = document.querySelector("#Options");
var Timer = document.querySelector("#timer");

    let currentindex = 0;
    let score = 0;
    let timeleft = 60;
    let timer;

let questions = [
        {
          question: "What does HTML stand for?",
          answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyperlinks Text Markup Language", correct: false },
            { text: "Home Tool Markup Language", correct: false },
            { text: "None of the above", correct: false }
          ]
        },
        {
          question: "What does CSS stand for?",
          answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false },
            { text: "None of the above", correct: false }
          ]
        },
        {
          question: "What is the correct syntax for referring to an external script called 'script.js'?",
          answers: [
            { text: "<script src='script.js'>", correct: true },
            { text: "<script href='script.js'>", correct: false },
            { text: "<script ref='script.js'>", correct: false },
            { text: "<script name='script.js'>", correct: false }
          ]
        },
      ]; 

      function displayquestion(question) {
        Question.innerText = question.question;
        Answers.innerHTML = '';
        question.Answers.forEach(answer => {
            const button = document.createElement('button');
            button.innerText = answer.text;
            button.classList.add('btn');
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener('click', selectAnswer);
            Answers.appendChild(button);
        });
      }
    