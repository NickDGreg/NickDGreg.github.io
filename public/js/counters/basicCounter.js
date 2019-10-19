const updateCo2 = () => {
    document.getElementById("co2").innerHTML = Date.now();
    setTimeout(updateCo2, 50);
}
const updateNitrogen = () => {
    document.getElementById("nitrogen").innerHTML = Date.now();
    setTimeout(updateNitrogen, 50);
}

updateCo2();
updateNitrogen();