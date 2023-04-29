
var data;

fetch('data.json')
    .then((response) => response.json())
    .then((json) => data = json);

// Metod som anropas när knapp 1 klickas på
function handleButton1Click() {

    var patrullnummer = data.patrullnummer[Math.floor(Math.random() * data.patrullnummer.length)];
    var caseText = data.cases[Math.floor(Math.random() * data.cases.length)];
    var startAdress = data.stockholm_adresser[Math.floor(Math.random() * data.stockholm_adresser.length)];
    var endAdress = data.stockholm_adresser[Math.floor(Math.random() * data.stockholm_adresser.length)];


    var textElement = document.getElementById("centered-text");

    var patrullText = "Du tjänstgör i " + patrullnummer + " och befinner dig på " + startAdress + " när du blir beordrade till " + endAdress + ".<br>"

    textElement.innerHTML = patrullText + "<br>" + caseText + "<br>";
}


// Här kopplar vi metoderna till respektive knapp genom att hitta elementen med hjälp av DOM-manipulation
var button1 = document.getElementsByClassName("button")[0];
button1.addEventListener("click", handleButton1Click);

