//  window.onload = myFunction;
function myFunction() {
    document.getElementById(thisScript.getAttribute("element")).innerHTML = Date.now();
    setTimeout(myFunction, 1);
}

var thisScript = document.currentScript;
myFunction();