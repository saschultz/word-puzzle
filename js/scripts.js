$(document).ready(function() {
  $("#form1").submit(function(event) {
  event.preventDefault();
  var userInputString = $("#userString").val();
  var splitString = userInputString.split("");
  for (var index = 0; index < splitString.length; index += 1) {
    if(splitString[index] === "a" || splitString[index] === "e" || splitString[index] === "i" || splitString[index] === "o" || splitString[index] === "u") {
      splitString[index] = "-";
    }
  }
  userInputString = splitString.join("");
  $("#result").text(userInputString);
  // console.log(splitString);
  });
});
