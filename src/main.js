import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Birthday from './Super-Galactic-Age-Calculator.js';

$(document).ready( function() {
    $('form#birthday').submit(function(event){
        event.preventDefault();
        let dateInput = new Date($('#theDate').val());
        let day = dateInput.getDate()+1;
        let month = dateInput.getMonth()+1;
        let year = dateInput.getFullYear();
        let date = new Birthday(day, month, year);
        let result = date.getWeekday();
        $('#output').prepend(result);
    });
});
