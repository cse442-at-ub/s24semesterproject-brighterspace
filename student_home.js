document.getElementById("tabs").addEventListener("click", function(event) {
    if (event.target.id === "tabsbutton" || event.target.id === "tabs") {
        toggletab();
    }
});

//test inputs
var classNames = ["MTH 241", "MTH 306", "CSE 442", "GLY 105", "MTH 411", "CSE 341", "CSE 331", "EAS 360"];
var studentName = "Brandon Chen";
var studentID = "90807060";

//append class to list in Div Classes
var ulElementClasses = document.querySelector(".classes ul");
classNames.forEach(function(currClass) { //change this
    var liElementClasses = document.createElement("li");
    var aElementClasses = document.createElement("a");
    aElementClasses.href = currClass + ".html";
    aElementClasses.textContent = currClass;
    liElementClasses.appendChild(aElementClasses);
    ulElementClasses.appendChild(liElementClasses);
});

//append class to list in Div Navbar
var ulElementNavbar = document.querySelector(".navbar ul");
var liElementName = document.createElement("li");
var aElementName = document.createElement("a");
aElementName.textContent = "Name: " + studentName; //change this
liElementName.appendChild(aElementName);
ulElementNavbar.appendChild(liElementName);

var liElementID = document.createElement("li");
var aElementID = document.createElement("a");
aElementID.textContent = "Student ID: " + studentID; //change this
liElementID.appendChild(aElementID);
ulElementNavbar.appendChild(liElementID);


function toggletab() {
    console.log("hello");
    var tab = document.getElementById("tabs");

    if(tab.style.transform == "translateX(-100%)"){
        tab.style.transform = "translateX(0%)";
    }
    else{
        tab.style.transform = "translateX(-100%)";
    }
}