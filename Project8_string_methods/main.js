// Concatenate
function Merge_Words() {
    var a = "Tody is ";
    var b = "very cold ";
    var c = "I think I ";
    var d = "will stay in.";
    var sentance = a.concat(b,c,d);
    document.getElementById("Merge").innerHTML = sentance;
}

//Slice 
function Slice_Words() {
    var Sentance = "The tallest man made structure in the word is taller than the second tallest man made structure";
    var Section = Sentance.slice(21,30);
    document.getElementById("Slice").innerHTML= Section;
}

//Upper
function Upper_Words() {
    var Line = "Click here to see this sentance in upper case";
    var Upper = Line.toUpperCase();
    document.getElementById("Caps").innerHTML = Upper;
}

//Serach
function Find_Words() {
    var Name = "My name is not Tony it's William alright";
    var Found = Name.search("William");
    document.getElementById("Find").innerHTML = Found;
}

// Number to string
function String_Conversion() {
    var N = 1025;
    var NS = N.toString()
    document.getElementById("Num_to_Str").innerHTML = NS
}


//Precition 
function precision_Method() {
    var Num = 23658.25698745681;
    document.getElementById("Precise").innerHTML = Num.toPrecision(8);
}

//To fixed
function fixed_Method() {
    var Num_2 = 25.36547254
    document.getElementById("Fixed").innerHTML = Num_2.toFixed(3);
}

//Value of
function valueof_Method() {
    var HW = "Hello World!!!";
    document.getElementById("Value_of").innerHTML = HW.valueOf();
}