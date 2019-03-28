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
      return ageYears + partialYear;
    }

    var expectancyYears = function() {
      if (l1 > yCounter()) {
        return l1 - yCounter();
      }
      else {
        return yCounter() - l1;
      }
    }

    var mercury = function() {
      if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
        return "Date not real";
      }
      else if (l1 > yCounter()) {
        return `You are ${(yCounter() / 0.24).toFixed(2)} years old and have ${(expectancyYears() / 0.24).toFixed(2)} years left to live on Mercury.`;
      }
      else {
        return `You are ${(yCounter() / 0.24).toFixed(2)} years old and have lived ${(expectancyYears() / 0.24).toFixed(2)} years past your expectancy age on Mercury.`;
      }
    }

    var venus = function() {
      if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
        return "Date not real";
      }
      else if (l1 > yCounter()) {
        return `You are ${(yCounter() / 0.62).toFixed(2)} years old and have ${(expectancyYears() / 0.62).toFixed(2)} years left to live on Venus.`;
      }
      else {
        return `You are ${(yCounter() / 0.62).toFixed(2)} years old and have lived ${(expectancyYears() / 0.62).toFixed(2)} years past your expectancy age on Venus.`;
      }
    }

    var earth = function() {
      if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
        return "Date not real";
      }
      else if (l1 > yCounter()) {
        return `You are ${(yCounter() / 1).toFixed(2)} years old and have ${(expectancyYears() / 1).toFixed(2)} years left to live on Earth.`;
      }
      else {
        return `You are ${(yCounter() / 1).toFixed(2)} years old and have lived ${(expectancyYears() / 1).toFixed(2)} years past your expectancy age on Earth.`;
      }
    }

    var mars = function() {
      if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
        return "Date not real";
      }
      else if (l1 > yCounter()) {
        return `You are ${(yCounter() / 1.88).toFixed(2)} years old and have ${(expectancyYears() / 1.88).toFixed(2)} years left to live on Mars.`;
      }
      else {
        return `You are ${(yCounter() / 1.88).toFixed(2)} years old and have lived ${(expectancyYears() / 1.88).toFixed(2)} years past your expectancy age on Mars.`;
      }
    }

    var jupiter = function() {
      if (d1 > month[m1 - 1] || d1 <= 0 || m1 > month.length || m1 <= 0) {
        return "Date not real";
      }
      else if (l1 > yCounter()) {
        return `You are ${(yCounter() / 11.86).toFixed(2)} years old and have ${(expectancyYears() / 11.86).toFixed(2)} years left to live on Jupiter.`;
      }
      else {
        return `You are ${(yCounter() / 11.86).toFixed(2)} years old and have lived ${(expectancyYears() / 11.86).toFixed(2)} years past your expectancy age on Jupiter.`;
      }
    }


    $("#mercury").text(mercury());
    $("#venus").text(venus());
    $("#earth").text(earth());
    $("#mars").text(mars());
    $("#jupiter").text(jupiter());
  });
});
