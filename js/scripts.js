$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var snakes = $("input:radio[name=q1]:checked").val();
    var temp = $("#q2").val();
    var environment = $("#q3").val();
    var fun = $("#q4").val();
    var bevvy = $("#q5").val();

    if (snakes === "yes") {
      $(".result").hide();
      $("#kakadu").show();
    }
      else if (bevvy === "wine") {
        $(".result").hide();
        $("#barossa").show();
    }
      else if (fun === "crocodile") {
        $(".result").hide();
        $("#kakadu").show();
    }
      else if (temp !== "cold" && environment === "coast") {
        $(".result").hide();
        $("#gold").show();
    }
      else if (temp !== "cold" && fun === "hike") {
        $(".result").hide();
        $("#daintree").show();
    }
      else if (temp === "hot" && environment === "desert") {
        $(".result").hide();
        $("#kakadu").show();
    }
      else if (temp !== "hot" && bevvy !== "wine") {
        $(".result").hide();
        $("#melbs").show();
      }
    });
});
