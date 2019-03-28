import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Birthday from "../src/Birthday.js";

$(document).ready( function() {
    $('#birthdayForm').submit(function(event){
      event.preventDefault();
      let birthday = new Birthday(birthDate, birthMonth, birthYear);
      let birthDate = parseInt($("#birthDate").val());
      let birthMonth = parseInt($("#birthMonth").val());
      let birthYear = parseInt($("#birthYear").val());

      $("#result").text()
  });
});
