import SuperGalacticAgeCalculator from "../src/supergalacticagecalculator.js";

describe('SuperGalacticAgeCalculator', function() {

  it('should test for the inputted value of d1', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(2, 1, 2000, 30, 2, 2019);
    expect(superGalacticAgeCalculator.d1).toEqual(2);
  });

  it('should test for the inputted value of m1', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(2, 1, 2000, 30, 2, 2019);
    expect(superGalacticAgeCalculator.m1).toEqual(1);
  });

  it('should test for the inputted value of y1', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(2, 1, 2000, 30, 2, 2019);
    expect(superGalacticAgeCalculator.y1).toEqual(2000);
  });

  it('should test for the inputted value of currentDay', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(2, 1, 2000, 30, 2, 2019);
    expect(superGalacticAgeCalculator.currentDay).toEqual(30);
  });

  it('should test for the inputted value of currentMonth', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(2, 1, 2000, 30, 2, 2019);
    expect(superGalacticAgeCalculator.currentMonth).toEqual(2);
  });

  it('should test for the inputted value of currentYear', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(2, 1, 2000, 30, 2, 2019);
    expect(superGalacticAgeCalculator.currentYear).toEqual(2019);
  });

  it('should test for the inputted value of currentYearDays', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(2, 1, 2000, 30, 2, 2019);
    let currentYearDays = superGalacticAgeCalculator.currentYearDays(superGalacticAgeCalculator.currentDay, superGalacticAgeCalculator.currentMonth);
    expect(currentYearDays).toEqual(89);
  });

  it('should test for the inputted value of adjustedBirthYearDays', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(30, 12, 2000, 30, 2, 2019);
    let adjustedBirthYearDays = superGalacticAgeCalculator.adjustedBirthYearDays(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1);
    expect(adjustedBirthYearDays).toEqual(1);
  });

  it('should test for the inputted value of yCounter', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(30, 3, 2018, 30, 2, 2019);
    let adjustedBirthYearDays = superGalacticAgeCalculator.adjustedBirthYearDays(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1);
    let currentYearDays = superGalacticAgeCalculator.currentYearDays(superGalacticAgeCalculator.currentDay, superGalacticAgeCalculator.currentMonth);
    let yCounter = superGalacticAgeCalculator.yCounter(superGalacticAgeCalculator.y1, superGalacticAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays);
    expect(yCounter).toEqual(1);
  });

  it('should test if expectancy years returns correctly', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(2, 1, 2000, 30, 2, 2019);
    let adjustedBirthYearDays = superGalacticAgeCalculator.adjustedBirthYearDays(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1);
    let currentYearDays = superGalacticAgeCalculator.currentYearDays(superGalacticAgeCalculator.currentDay, superGalacticAgeCalculator.currentMonth);
    let yCounter = superGalacticAgeCalculator.yCounter(superGalacticAgeCalculator.y1, superGalacticAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays);
    let expectancyYears = superGalacticAgeCalculator.expectancyYears(yCounter).toFixed(2);
    expect(parseFloat(expectancyYears)).toEqual(60.76);
  });

  it('should test for age on Mercury and years left to live on Mercury until you reach your life expectancy', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(30, 12, 2000, 30, 2, 2019);
    let currentYearDays = superGalacticAgeCalculator.currentYearDays(superGalacticAgeCalculator.currentDay, superGalacticAgeCalculator.currentMonth);
    let adjustedBirthYearDays = superGalacticAgeCalculator.adjustedBirthYearDays(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1);
    let yCounter = parseFloat(superGalacticAgeCalculator.yCounter(superGalacticAgeCalculator.y1, superGalacticAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let expectancyYears = superGalacticAgeCalculator.expectancyYears(yCounter);
    let mercury = superGalacticAgeCalculator.mercury(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1, yCounter, expectancyYears);
    expect(mercury).toEqual(`You are 76.03 years old and have 257.31 years left to live on Mercury.`);
  });

  it('should test for age on Venus and years left to live on Venus until you reach your life expectancy', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(30, 12, 2000, 30, 2, 2019);
    let currentYearDays = superGalacticAgeCalculator.currentYearDays(superGalacticAgeCalculator.currentDay, superGalacticAgeCalculator.currentMonth);
    let adjustedBirthYearDays = superGalacticAgeCalculator.adjustedBirthYearDays(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1);
    let yCounter = parseFloat(superGalacticAgeCalculator.yCounter(superGalacticAgeCalculator.y1, superGalacticAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let expectancyYears = superGalacticAgeCalculator.expectancyYears(yCounter);
    let venus = superGalacticAgeCalculator.venus(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1, yCounter, expectancyYears);
    expect(venus).toEqual(`You are 29.43 years old and have 99.60 years left to live on Venus.`);
  });

  it('should test for age on Earth and years left to live on Earth until you reach your life expectancy', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(30, 12, 2000, 30, 2, 2019);
    let currentYearDays = superGalacticAgeCalculator.currentYearDays(superGalacticAgeCalculator.currentDay, superGalacticAgeCalculator.currentMonth);
    let adjustedBirthYearDays = superGalacticAgeCalculator.adjustedBirthYearDays(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1);
    let yCounter = parseFloat(superGalacticAgeCalculator.yCounter(superGalacticAgeCalculator.y1, superGalacticAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let expectancyYears = superGalacticAgeCalculator.expectancyYears(yCounter);
    let earth = superGalacticAgeCalculator.earth(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1, yCounter, expectancyYears);
    expect(earth).toEqual(`You are 18.25 years old and have 61.75 years left to live on Earth.`);
  });

  it('should test for age on Mars and years left to live on Mars until you reach your life expectancy', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(30, 12, 2000, 30, 2, 2019);
    let currentYearDays = superGalacticAgeCalculator.currentYearDays(superGalacticAgeCalculator.currentDay, superGalacticAgeCalculator.currentMonth);
    let adjustedBirthYearDays = superGalacticAgeCalculator.adjustedBirthYearDays(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1);
    let yCounter = parseFloat(superGalacticAgeCalculator.yCounter(superGalacticAgeCalculator.y1, superGalacticAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let expectancyYears = superGalacticAgeCalculator.expectancyYears(yCounter);
    let mars = superGalacticAgeCalculator.mars(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1, yCounter, expectancyYears);
    expect(mars).toEqual(`You are 9.71 years old and have 32.85 years left to live on Mars.`);
  });

  it('should test for age on Jupiter and years left to live on Jupiter until you reach your life expectancy', function() {
    let superGalacticAgeCalculator = new SuperGalacticAgeCalculator(30, 12, 2000, 30, 2, 2019);
    let currentYearDays = superGalacticAgeCalculator.currentYearDays(superGalacticAgeCalculator.currentDay, superGalacticAgeCalculator.currentMonth);
    let adjustedBirthYearDays = superGalacticAgeCalculator.adjustedBirthYearDays(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1);
    let yCounter = parseFloat(superGalacticAgeCalculator.yCounter(superGalacticAgeCalculator.y1, superGalacticAgeCalculator.currentYear, currentYearDays, adjustedBirthYearDays));
    let expectancyYears = superGalacticAgeCalculator.expectancyYears(yCounter);
    let jupiter = superGalacticAgeCalculator.jupiter(superGalacticAgeCalculator.d1, superGalacticAgeCalculator.m1, yCounter, expectancyYears);
    expect(jupiter).toEqual(`You are 1.54 years old and have 5.21 years left to live on Jupiter.`);
  });
});
