//Simple addition function
function addition_function() {
    var addition = 25 + 157;
    document.getElementById("Math_ADD").innerHTML = "157 + 25 = " +addition
}


// Simple subtraction function
function subtraction_function() {
    var subtraction = 250 - 138;
    document.getElementById("Math_MIN").innerHTML = "250 - 138 = " + subtraction
}


//Simple division function
function division_function() {
    var division = 52 / 2;
    document.getElementById("Math_DIV").innerHTML = "52 / 2 = " + division
}


//Simple multiply function
function multiply_function() {
    var multiply = 5 * 4;
    document.getElementById("Math_MULTI").innerHTML = "5 X 4 = " + multiply
}


// Calculating the results average
function average_function() {
    var average = (182 + 112 + 26 + 20) / 4;
    document.getElementById("Average").innerHTML = "The average of the results is " + average
}


// Finding the remainder
function modulus_operator() {
    var left_over = 85 % 12;
    document.getElementById("Remainder").innerHTML = "The remander of 85 / 12 is " + left_over
}


// Using only one operator
function negation_operator() {
    var x = 10;
    document.getElementById("Math_OPER").innerHTML = -x
}


// Adding on one
function increment_operator() {
    var a = 7;
    a++;
    document.getElementById("Math_INC").innerHTML = "The original number was 7 but now its " + a
}


//Subtracting one
function decrement_operator() {
    var x = 100;
    x--;
    document.getElementById("Math_DEC").innerHTML = "100 turns into " + x
}


// Getting a random number between 1 and 50
function random_number() {
    x = Math.random() * 50;
    document.getElementById("Math_RAN").innerHTML = "The random number is " + x
}