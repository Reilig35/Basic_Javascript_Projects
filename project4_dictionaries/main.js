//Creating my first dicionary

function my_Dictionary() {
    var Car = {
        Make: "BMW",
        Model: "M5",
        Year: 2015,
        Colour: "Red",
        Engine: "3.0 ltr"
    }
    document.getElementById("Dictionary").innerHTML = "I drive a " + Car.Make + " " + Car.Model
}


//Deleting one of the values from a key pair
function my_Dictionary_2() {
    var Car = {
        Make: "BMW",
        Model: "M5",
        Year: 2015,
        Colour: "Red",
        Engine: "3.0 ltr"
    };
    delete Car.Colour;
    delete Car.Engine;
    document.getElementById("Dictionary_2").innerHTML = Car.Colour + " " + Car.Engine
}