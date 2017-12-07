//Business Logic
function Play(roll, currentScore, totalScore) {
  this.roll = roll;
  this.currentScore = currentScore;
  this.totalScore = totalScore;
  if (totalScore >= 100) {
    alert("You Won!");
  }
}


Play.prototype.diceRoll = function() {
  var roll = (Math.floor(Math.random()*6)+1);
  this.roll = roll;
}

Play.prototype.fullTurn = function(roll) {
  if (roll === 1) {
    this.currentScore = 0;
  }
  else {
    this.currentScore += roll;
  }
}

Play.prototype.Hold = function() {
  this.currentScore += this.totalScore;
}


//UI Logic
$(document).ready(function() {
  var Player1 = new Play(0, 0, 0);
  var Player2 = new Play(0, 0, 0);
  $("#btn-roll").click(function(event) {
    console.log(Player1);
    event.preventDefault();
    Player1.diceRoll();
    Player1.fullTurn(Player1.roll);
    $(".your-roll").text(Player1.roll);
    $(".current-score").text(Player1.currentScore);
    if (Player1.roll ===  1) {
      $(".current-score").text(Player1.currentScore);
    }
  });

  $("#btn-roll2").click(function(event) {
    event.preventDefault();
    Player2.diceRoll();
    Player2.fullTurn(Player2.roll);
    $(".your-roll2").text(Player2.roll);
    $(".current-score2").text(Player2.currentScore);
    if (Player2.roll ===  1) {
      $(".current-score2").text(Player2.currentScore);
    }
  });

  $("#btn-hold").click(function(event) {
    event.preventDefault();
    Player1.Hold();
    $(".total-score").text(Player1.currentScore);
  });

  $("#btn-hold2").click(function(event) {
    event.preventDefault();
    Player2.Hold(Player2.totalScore);
    $(".total-score2").text(Player2.currentScore);
  });

});
