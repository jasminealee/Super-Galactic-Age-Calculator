$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var d1 = parseInt($("#birthDate").val());
    var m1 = parseInt($("#birthMonth").val());
    var y1 = parseInt($("#birthYear").val());
    var l1 = 80;

    var adjustedBirthYear = y1 + 1;

    var adjustedBirthYearDays = function() {
      var days = 0;
      for (var i = (m1 - 1); i < month.length; i++) {
        days += month[i];
      }
      return days - d1;
    }
  });
});
