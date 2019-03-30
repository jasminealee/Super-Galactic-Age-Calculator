import $ from 'jquery'
import SuperGalacticAgeCalculator from './supergalacticagecalculator.js'

$(document).ready(function() {
  $("#run").submit(function(event) {
    event.preventDefault();

    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator();

    let d1 = parseInt($("#birthDate").val());
    let m1 = parseInt($("#birthMonth").val());
    let y1 = parseInt($("#birthYear").val());
    let currentDate = new Date();
    let currentDay = currentDate.getDate();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    superGalacticAgeCalculator = new SuperGalacticAgeCalculator(d1, m1, y1, currentDay, currentMonth, currentYear);

    let currentYearDays = superGalacticAgeCalculator.currentYearDays(currentDay, currentMonth);
    let adjustedBirthYearDays = superGalacticAgeCalculator.adjustedBirthYearDays(d1, m1);
    let yCounter = superGalacticAgeCalculator.yCounter(y1, currentYear, currentYearDays, adjustedBirthYearDays);
    let expectancyYears = superGalacticAgeCalculator.expectancyYears(yCounter);

    let mercury = superGalacticAgeCalculator.mercury(d1, m1, yCounter, expectancyYears);
    let venus =  superGalacticAgeCalculator.venus(d1, m1, yCounter, expectancyYears);
    let earth =  superGalacticAgeCalculator.earth(d1, m1, yCounter, expectancyYears);
    let mars =  superGalacticAgeCalculator.mars(d1, m1, yCounter, expectancyYears);
    let jupiter =  superGalacticAgeCalculator.jupiter(d1, m1, yCounter, expectancyYears);

    $("#mercury").text(mercury);
    $("#venus").text(venus);
    $("#earth").text(earth);
    $("#mars").text(mars);
    $("#jupiter").text(jupiter);
  });
});
