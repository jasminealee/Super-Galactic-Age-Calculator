$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var d1 = parseInt($("#birthDate").val());
    var m1 = parseInt($("#birthMonth").val());
    var y1 = parseInt($("#birthYear").val());


    var adjustedBirthYear = y1 + 1;

    var adjustedBirthYearDays = function() {
      var days = 0;
      for (var i = (m1 - 1); i < month.length; i++) {
        days += month[i];
      }
      return days - d1;
    }

    var date = new Date();
    var currentYear = date.getFullYear();

    var currentYearDays = function() {
      var currentMonth = date.getMonth();
      var currentDay = date.getDate();
      var days = 0;
      for (var i = 0; i < currentMonth; i++) {
        days += month[i];
      }
      return days + currentDay;
    }

    var yCounter = function() {
      var ageYears = currentYear - adjustedBirthYear;
      var addDays = currentYearDays() + adjustedBirthYearDays();
      var partialYear = addDays / 365;
      if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
        return "Date not real";
      }
      else {
        return ageYears + partialYear;
      }
    }

    $("#result").text(yCounter());
  });
});
