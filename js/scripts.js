$(document).ready(function() {
  $("#form1").submit(function() {
  event.preventDefault();
  var userInputString = $("#userString").val();
  var splitString = userInputString.split("");
  for (var index = 0; index < splitString.length; index += 1) {
    if(splitString[index] === "a" || splitString[index] === "e" || splitString[index] === "i" || splitString[index] === "o" || splitString[index] === "u") {
      splitString[index] = "-";
    }
  }
  var userInputString2 = splitString.join("");
  $("#form1").hide();
  $("#result").text(userInputString2);
  $("#form2").show();

  $("#form2").submit(function() {
  event.preventDefault();
  var userResponse = $("#userAnswer").val();

  if (userInputString === userResponse) {
    $("#output").text("Great jorb yahoo");
    }
    else {
    $("#output").text("Fail");
    }
    });
  });
});
