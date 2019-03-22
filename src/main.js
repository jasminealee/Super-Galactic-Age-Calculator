import './styles.css';
import $ from 'jquery';
import { Birthday }from './Super-Galactic-Age-Calculator.js';

$(document).ready( function() {
    $('form#birthday').submit(function(event){
      event.preventDefault();
      const birthMonth = parseInt($('#birthMonth').val());
      const birthDate = parseInt($('#birthdate').val());
      const birthYear = parseInt($('#birthYear').val());
      let birthday = new birthday(birthMonth, birthDate, birthYear);
      let age = Birthday.getAge(birthday);
      let mercuryAge = Birthday.ageConvert(Birthday.getMercuryAge(age));
      let venusAge = Birthday.ageConvert(Birthday.getVenusAge(age));
      let marsAge = Birthday.ageConvert(Birthday.getMarsAge(age));
      let jupiterAge = Birthday.ageConvert(Birthday.getJupiterAge(age));

      console.log(`your mercury age is ${mercuryAge}`);
      console.log(`your venus age is ${venusAge}`);
      console.log(`your mars age is ${marsAge}`);
      console.log(`your jupiter age is ${jupiterAge}`);
  });
});
