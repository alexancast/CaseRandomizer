var data;

// Ladda in data från data.json
var xhr = new XMLHttpRequest();
xhr.open('GET', 'data.json', true);
xhr.onload = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        data = JSON.parse(xhr.responseText);
        console.log(data); // för att se att data har laddats in korrekt
    }
};
xhr.send(null);

// Metod som anropas när knapp 1 klickas på
function handleButton1Click() {
    // Slumpa ett patrullnummer, case och en stockholm_adress från objektet i data.json
    var patrullnummer = data.patrullnummer[Math.floor(Math.random() * data.patrullnummer.length)];
    var cases = data.cases[Math.floor(Math.random() * data.cases.length)];
    var stockholm_adresser = data.stockholm_adresser[Math.floor(Math.random() * data.stockholm_adresser.length)];

    // Sätt ihop de slumpmässiga värdena till en sträng
    var text = "Patrullnummer: " + patrullnummer + "\n" +
        "Case: " + cases + "\n" +
        "Adress: " + stockholm_adresser;

    // Visa den slumpmässiga strängen i den centrerade texten
    var centeredText = document.getElementsByClassName("centered")[0];
    centeredText.textContent = text;
}

// Metod som anropas när knapp 2 klickas på
function handleButton2Click() {
    console.log("Knapp 2 klickades på!");
    // Lägg till din egen logik här för vad som ska hända när knapp 2 klickas på
}

// Här kopplar vi metoderna till respektive knapp genom att hitta elementen med hjälp av DOM-manipulation
var button1 = document.getElementsByClassName("button")[0];
var button2 = document.getElementsByClassName("button")[1];

button1.addEventListener("click", handleButton1Click);
button2.addEventListener("click", handleButton2Click);
