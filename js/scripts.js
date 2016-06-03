$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var snakes = $("input:radio[name=q1]:checked").val();
    var temp = $("#q2").val();
    var environment = $("#q3").val();
    var fun = $("#q4").val();
    var bevvy = $("#q5").val();

    alert(snakes+temp);
  });
});
