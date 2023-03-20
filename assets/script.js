var Start = document.querySelector(".startbtn");
var Quiz = document.querySelector("QuizContainer");
var Question = document.querySelector("#Question");
var Answers = document.querySelector("#Options");
var Timer = document.querySelector("#timer");

    let currentindex = 0;
    let score = 0;
    let timeleft = 60;

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

      function displayquestion() {
        Question.innerText = Question;
        Answers.innerHTML = '';
        Question.Answers.forEach(answer => {
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
    
      function selectAnswer(event) {
        const selectedBtn = event.target;
        const correct = selectedBtn.dataset.correct === 'true';
        if (correct) {
            score++;
        } else {
            timeleft -= 10;
      }
      currentindex++;
      if (currentindex < questions.length) {
        displayquestion(questions[currentindex]);
      } else {
        endQuiz();
      }
    }

    function startQuiz() {
       Start.classList.add('hide');
        Timer = setInterval(updateTimer, 1000);
       displayquestion();
       selectAnswer();
    }

    function endQuiz() {
        clearInterval(Timer);
        Quiz.innerHTML = "<h2>You scored ${score} out of ${questions.length}.</h2>"
    const initialsInput = document.getElementById('initials');
    const form = document.querySelector('form');
    form.addEventListener('submit', saveHighScore);
    }

    function updateTimer() {
        timeleft--;
        Timer.innerText = timeleft;
        if (timeleft === 0) {
          endQuiz();
        }
      }
      
      function saveHighScore(event) {
        event.preventDefault();
        const initials = initialsInput.value;
        const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
        highScores.push({ initials, score: timeleft });
        highScores}

        Start.addEventListener('click', startQuiz);