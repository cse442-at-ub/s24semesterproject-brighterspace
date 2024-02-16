function showtab() {
    console.log("hello");
    var tab = document.getElementById("tabs");

    if(tab.style.transform == "translateX(-100%)"){
        tab.style.transform = "translateX(0%)";
    }
    else{
        tab.style.transform = "translateX(-100%)";
    }
}