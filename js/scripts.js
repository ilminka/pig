//Business Logic
function Play(roll, currentScore, totalScore) {
  this.roll = roll;
  this.currentScore = currentScore;
  this.hold = totalScore;
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
    Play.currentScore === 0;
    console.log(Play.currentScore + "if");
  }
  else {
    Play.currentScore += roll;
    console.log(Play.currentScore + "else");
  }
}



//UI Logic
$(document).ready(function() {
  var Player1 = new Play(0, 0, 0);
  $("#btn-roll").click(function(event) {
    event.preventDefault();
    // var myRoll = new Roll (roll, currentScore, totalScore);
    //   $(".your-roll").append(myRoll.roll);
    //   $(".current-score").append(myRoll.currentScore);
    //   $(".total-score").append(myRoll.totalScore);
    //$(".ul-result").append(Play);
    Player1.diceRoll();
    Player1.fullTurn(Player1.roll);
    $(".your-roll").text(Player1.roll);
    $(".current-score").text(Player1.currentScore);
    console.log(Player1.roll);

  });
  $("#btn-hold").click(function(event) {
    event.preventDefault();
  //  $(".ul-result").append("HOLD");
  //  return("Hi");
  });
});
