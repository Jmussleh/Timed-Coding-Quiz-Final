function getHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    for (var i = 0; i < highscores.length; i += 1) {
      var liTag = document.createElement('li');
      liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;
      var ol = document.getElementById('highscores');
      ol.appendChild(liTag);
    }
  }
  
  function removeHighscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
  }
  
  document.getElementById('remove').onclick = removeHighscores;
  
  getHighscores();
  