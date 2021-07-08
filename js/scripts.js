

//User Interface Logic-------
$(document).ready(fucntion() {
  $("form#ticket").submit(function(event) {
    event.preventDefault();
    const selectedMovie = parseInt($("#movie").val());
    const selectedTime = $("#time").val();
    const selectedAge = parseInt($("#age").val();)
  });
});
