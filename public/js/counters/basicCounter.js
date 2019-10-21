const totalCo2 = 35526302800 // https://data.worldbank.org/indicator/EN.ATM.GHGT.KT.CE
const co2PerMillisecond = totalCo2 / (365 * 24 * 60 * 60 * 1000);
const yearStartMillis = new Date(new Date().getFullYear(), 0).getTime();

const getMillisThisYear = () => Date.now() - yearStartMillis;

const updateCo2 = () => {
    const millisThisYear = getMillisThisYear();
    document.getElementById("co2").innerHTML = ( millisThisYear * co2PerMillisecond ).toFixed(2);
    setTimeout(updateCo2, 1000);
}
const updateNitrogen = () => {
    document.getElementById("nitrogen").innerHTML = Date.now();
    setTimeout(updateNitrogen, 1000);
}

updateCo2();
// updateNitrogen();