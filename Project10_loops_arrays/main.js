//While Loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML= Digit;
}

//String Length
function Str_Length() {
    var Sentance = "How long is this sentance";
    document.getElementById("Length").innerHTML = Sentance.length + " characters";
}

//For Loops
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array Function
function array_Function() {
    var Car_in_Garage = [];
    Car_in_Garage[0] = "BMW";
    Car_in_Garage[1] = "Ferrari";
    Car_in_Garage[2] = "Opel";
    Car_in_Garage[3] = "Porsche";
    Car_in_Garage[4] = "Dodge";
    document.getElementById("Car_Array").innerHTML = "Today I will drive my " + Car_in_Garage[2] + "." + " Tommorow I will drive my " + Car_in_Garage[0] + "."
}

//Constant Function
function constant_Function() {
    const Engine = {make:"Cosworth", power:"800bhp", cylinders:"V8"};
    Engine.price = "1.5m";
    Engine.power = "750bhp";
    document.getElementById("Constant").innerHTML = "The cost of the engine is " + Engine.price + " and it produces " + Engine.power +"."
}

//Global Let Array
let  Fruit = [];
Fruit[0] = "Apples";
Fruit[1] = "Bananas";
Fruit[3] = "Oranges";
Fruit[4] = "Pineapples";
Fruit[5] = "Grapes";

function let_Function() {
    document.getElementById("global_let").innerHTML = "I would like to buy some " + Fruit[1] + "."
}

//Return
function return_Function(name) {
    return "My name is " + name;
}
document.getElementById("name").innerHTML = return_Function("William");
