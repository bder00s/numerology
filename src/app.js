//1. Data importeren

import valueOfNumbers from "./assets/data/valueOfNumbers";
import meaningOfNumbers from "./assets/data/meaningOfNumbers";

//2. Referentie maken - variabele naam + referentie daarin opslaan
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const card = document.getElementById('card');


//3. Eventlistener koppelen aan submit formulier
submit.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('form is submitted');
    console.log(getName(input.value, valueOfNumbers));

})


// 4. Maak een functie die de waarde van elke letter in je naam opzoekt in de database en samenvoegt

function getName(str, obj) {
    let output = 0;
    for (let value of str.toLowerCase()) {

        if (obj[value]) {
            output += obj[value];
        }
    }
    return output;
}

// 5. Functie maken die het totaal terug brengt tot 1 cijfer

