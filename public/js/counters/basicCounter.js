window.onload = myFunction;
    function myFunction() {
      document.getElementById("co2").innerHTML = Date.now();
      setTimeout(myFunction, 1);
    }