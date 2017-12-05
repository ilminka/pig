$(document).ready(function() {
  $("#btn-roll").click(function(event) {
    event.preventDefault();

    $(".ul-result").append("sup");
    return("Hi");
  });
  $("#btn-hold").click(function(event) {
    event.preventDefault();

    $(".ul-result").append("HOLD");
    return("Hi");
  });
});
