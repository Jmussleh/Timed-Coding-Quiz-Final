var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

var questions = document.getElementById('questions');
var timerEl = document.getElementById('time');
var optionsEl = document.getElementById('options');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var inputEl = document.getElementById('input');

function startQuiz() {
    var startScreen = document.getElementById('start-screen');
    startScreen.setAttribute('class', 'hide');
    questions.removeAttribute('class');
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
    displayQuestion();
  }

  function displayQuestion() {
    var currentQ = questions[QuestionIndex];
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQ.title;
    optionsEl.innerHTML = '';
    for (var i = 0; i < currentQ.options.length; i++) {
      var option = currentQ.options[i];
      var option1 = document.createElement('button');
      option1.setAttribute('class', 'choice');
      option1.setAttribute('value', option);
  
      option1.textContent = i + 1 + '. ' + option;

      optionsEl.appendChild(option1);
    }
  }
  