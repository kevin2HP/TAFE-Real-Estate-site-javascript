// FAQ animation

// store each question and answer to a variable (by default questions are hidden with css (display:none;)
var q1 = document.getElementsByClassName("question1");
var a1 = document.getElementsByClassName("answer1");

var q2 = document.getElementsByClassName("question2");
var a2 = document.getElementsByClassName("answer2");

var q3 = document.getElementsByClassName("question3");
var a3 = document.getElementsByClassName("answer3");

var q4 = document.getElementsByClassName("question4");
var a4 = document.getElementsByClassName("answer4");

var q5 = document.getElementsByClassName("question5");
var a5 = document.getElementsByClassName("answer5");

//Ensure the document is ready before functionality is availble
$(document).ready(function () {
//Responds when a user click on question
  $(q1).click(function () {
// // This line toggles answers1s visibility on each click creating the show and hide effect
    $(a1).toggle();
  });
  $(q2).click(function () {
    $(a2).toggle();
  });
  $(q3).click(function () {
    $(a3).toggle();
  });
  $(q4).click(function () {
    $(a4).toggle();
  });
  $(q5).click(function () {
    $(a5).toggle();
  });
});

// End of FAQ animation
