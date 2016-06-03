var snakes = $("input:radio[name=q1]:checked").val();
var temp = $("#q2").val();
var environment = $("#q3").val();
var fun = $("#q4").val();
var bevvy = $("#q5").val();

$(document).ready(function(){

  $("btn-primary#ok").submit(function(event) {
    event.preventDefault();
