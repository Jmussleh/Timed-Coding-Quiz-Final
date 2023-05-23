var QuestionIndex = 0;
var time = questions.length * 15;
var timerId;

var questions = document.getElementById('questions');
var timerEl = document.getElementById('time');
var optionsEl = document.getElementById('options');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var inputEl = document.getElementById('input');
var titleEl = document.getElementById('question-title');

function startQuiz() {
    var startScreen = document.getElementById('start-screen');
    startScreen.setAttribute('class', 'hide');
    questions.removeAttribute('class');
    timerId = setInterval(clock, 1000);
    timerEl.textContent = time;
    displayQuestion();
  }

  function displayQuestion() {
    var currentQ = questions[QuestionIndex];
    titleEl.textContent = currentQ.title;
    optionsEl.innerHTML = '';
    for (var i = 0; i < currentQ.options.length; i++) {
      var option = currentQ.options[i];
      var option1 = document.createElement('button');
      option1.setAttribute('class', 'option');
      option1.setAttribute('value', option);
  
      option1.textContent = i + 1 + '. ' + option;

      optionsEl.appendChild(option1);
    }
  }

  function Click(event) {
    var button = event.target;

    if (!button.matches('.option')) {
      return;
    }
  
    if (button.value !== questions[QuestionIndex].answer) {
      time -= 15;
      if (time < 0) {
        time = 0;
      }
  
      timerEl.textContent = time;
  
      inputEl.textContent = 'Wrong!';
    } else {
      inputEl.textContent = 'Correct!';
    }
  
    inputEl.setAttribute('class', 'input');
    setTimeout(function () {
      inputEl.setAttribute('class', 'input hide');
    }, 1000);
  
    QuestionIndex++;
  
    if (time <= 0 || QuestionIndex === questions.length) {
      endQuiz();
    } else {
      displayQuestion();
    }
  }
  
  function endQuiz() {

    clearInterval(timerId);

    var finalScreenEl = document.getElementById('final-screen');
    finalScreenEl.removeAttribute('class');
  
    var ScoreEl = document.getElementById('score');
    ScoreEl.textContent = time;

    questions.setAttribute('class', 'hide');
  }
  
  function clock() {
   
    time--;
    timerEl.textContent = time;
  
    if (time <= 0) {
      endQuiz();
    }
  }
  
  function Highscore() {

    var initials = initialsEl.value.trim();
  
    if (initials !== '') {

      var highscores =
        JSON.parse(window.localStorage.getItem('highscores')) || [];
  
      var newScore = {
        score: time,
        initials: initials,
      };
  
      highscores.push(newScore);
      window.localStorage.setItem('highscores', JSON.stringify(highscores));

      window.location.href = 'HighScore.html';
    }
  }
  
  function Enter(event) {
    if (event.key === 'Enter') {
      Highscore();
    }
  }
  
  optionsEl.onclick = Click;
  
  submitBtn.onclick = Highscore;
  
  initialsEl.onkeyup = Enter;

  startBtn.onclick = startQuiz;
  