// Global Variable
var x = 15;
function Add_Global() {
    var sum = x + 32;
    document.getElementById("Global_Variable").innerHTML = "x + 32 = " + sum
}

//Local Variable
function Sub_Local() {
    y = 41;
    var minus = 100 - y;
    document.getElementById("Local_Variable").innerHTML = "100 - y = " + minus
}



// If Statement I tried before learning about else statements

function get_Minutes() {
    var d = new Date();
    var M = d.getMinutes();
    
    if (M <= 30) {
        document.getElementById("Late").innerHTML = M + "/60 " + "this hours only starting";
    }
    else if (M > 30) {
        document.getElementById("Late").innerHTML = M + "/60" + " not long left to go for this hour";
    }
}

// My If statement I tried before learning about else statements
var choice = Math.floor(Math.random() * 20);

function random_Number() {
    if (choice >= 11) {
        document.getElementById("Number").innerHTML = "The programme picked a high number at " + choice
    }
    else if (choice < 10) {
        document.getElementById("Number").innerHTML = "The programme picked a low number at " + choice
    }
}

// Else Statement
function Height_Function() {
    Height = document.getElementById("Height").value;
    if (Height > 193) {
        F1_Drive = "Sorry you're to tall to race in F1"
    }
    else {
        F1_Drive = "Congratulations you can be an F1 driver"
    }
    document.getElementById("Can_You_Race").innerHTML = F1_Drive;
}

// Else Statement
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon";
    }
    else {
        Reply = "It is evening"
    }
    document.getElementById("Time_of_day").innerHTML = Reply
}