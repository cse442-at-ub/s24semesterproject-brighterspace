document.getElementById("tabs").addEventListener("click", function(event) {
    if (event.target.id === "tabsbutton" || event.target.id === "tabs") {
        toggletab();
    }
});

//test inputs
var classes = ["MTH241", "MTH306", "CSE442", "GLY105", "MTH411", "CSE341", "CSE331", "EAS360"];
var studentName = "Brandon Chen";
var studentID = "90807060";

//append class to list in Div Classes
var ulElementClasses = document.querySelector(".classes ul");
classes.forEach(function(currClass) { //change this
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

//random animation, I will make it hover animation next time
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