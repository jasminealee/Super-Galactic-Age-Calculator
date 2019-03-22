// import Date from "../src/Super-Galactic-Age-Calculator.js";

describe('Birthday', function() {


  it('should return one year when asked age difference from now to next year', function () {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const birthday = new Birthday(year - 1, month + 1, day);
  expect(Birthday.getAge(birthday) - 31556952).toBeLessThan(8.64e+7);
  });

  it('should return about 4.17 when one year is entered', function () {
  expect(Birthday.getMercuryAge(1)).toEqual(4.17, 1);
  });

  it('should return about 1.61 when one year is entered', function () {
  expect(Birthday.getVenusAge(1)).toBeCloseTo(1.61, 1);
  });

  it('should return about .53 when one year is entered', function () {
  expect(Birthday.getMarsAge(1)).toBeCloseTo(.53, 1);
  });

  it('should return about .08 when one year is entered', function () {
  expect(Birthday.getJupiterAge(1)).toBeCloseTo(.08, 1);
  });

  it('should return zero years left to live', function () {
  expect(Birthday.yearsLeft(31556952, 1)).toEqual(0);

    });
  });
