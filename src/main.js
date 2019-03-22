import './styles.css';
import { Birthday }from './Super-Galactic-Age-Calculator.js';

$(document).ready( function() {
    $('form#birthday').submit(function(event){
        event.preventDefault();

        const birthMonth = parseInt($('#birthMonth').val());
        const birthDate = parseInt($('#birthdate').val());
        const birthYear = parseInt($('#birthYear').val());
        let birthday = new birthday(birthMonth, birthDate, birthYear);
        let age = Birthday.getAge(birthday);
        $('#output').prepend(result);
    });
});
