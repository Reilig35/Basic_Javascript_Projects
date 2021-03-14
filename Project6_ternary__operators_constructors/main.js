//Creating a tenary operator

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

//Challenge 8
function Vote_function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age >= 18) ? "You can vote":"You cannot vote yet";
    document.getElementById("Voter").innerHTML = Can_vote;
}


//Contructor
function Vehicle(Make, Model, Year, Colour) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Colour = Colour;
}

var Jack = new Vehicle("Dodge", "Viper", 2021, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2014, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myfunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Colour + " coloured " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

//New and This
function Student(Fname, Lname, Age, Major) {
    this.Student_Fname = Fname;
    this.Student_Lname = Lname;
    this.Student_Age = Age;
    this.Student_Major = Major;
}

var Student_1 = new Student("John", "Hickey", 21, "Arts");
var Student_2 = new Student("Nicole", "Stevens", 24, "Medicine");
var Student_3 = new Student("Connor", "Smith", 20, "Computer Science");

function myFunction() {
    document.getElementById("New_and_This").innerHTML = Student_2.Student_Fname + " is " + Student_2.Student_Age + " and studying " + Student_2.Student_Major
}


//Function Nested in a Function
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = count();
    function count() {
        var Starting_point = 0;
        function Add_on_two() {Starting_point += 2;}
        Add_on_two();
        return Starting_point
    }
}

