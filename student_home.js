document.getElementById("tabs").addEventListener("click", function(event) {
    if (event.target.id === "tabsbutton" || event.target.id === "tabs") {
        toggletab();
    }
});

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