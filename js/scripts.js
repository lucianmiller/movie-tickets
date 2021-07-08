

//User Interface Logic-------
$(document).ready(function() {
  $("form#tickets").submit(function(event) {
    event.preventDefault();
    const selectedMovie = parseInt($("#movie").val());
    const selectedTime = $("#time").val();
    const selectedAge = parseInt($("#age").val());
  });
});
