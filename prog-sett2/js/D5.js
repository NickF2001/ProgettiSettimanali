/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log('Esercizio 1:');
for(x = 0; x < pets.length; x++){

  console.log(pets[x]);

}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log('Esercizio 2:');

const ordine = pets.sort();
console.log(ordine);

// Stampa di ogni elemento array in ordine alfabetico in console:
for(a = 0; a < pets.length; a++){

  console.log(ordine[a]);

}


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

let inverti = ordine.reverse();
console.log('Esercizio 3:');

for(c = 0; c < pets.length; c++){

  console.log(inverti[c]);

}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const pets2 = ['dog', 'cat', 'hamster', 'redfish']
const ordine2 = pets2.sort();

console.log('Esercizio 4:');

let removedElement = ordine2.shift();
ordine2.push('cat');
console.log(ordine2);

for(d = 0; d < pets.length; d++){

      console.log(ordine2[d]);
    
    }


/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars[0].licensePlate = 'targa1';
cars[1].licensePlate = 'targa2';
cars[2].licensePlate = 'targa3';

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

cars.push('oggetto');
console.log('Esercizio 6');

cars[0].trims.pop();
cars[1].trims.pop();
cars[2].trims.pop();
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
console.log('Esercizio 7');

for (let i = 0; i < cars.length; i++) {
  switch(cars[i].trims) {
    case 0:
      justTrims.trims.push(cars[i]);
      break;
      case 1:
      justTrims.trims.push(cars[i]);
      break;
      case 2:
      justTrims.trims.push(cars[i]);
      break;
  }
  console.log(justTrims[i]);
}


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log('Esercizio 8');


function color() {
for (let i = 0; i < cars.length; i++) {
  if(cars[i].color.charAt(0) === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}
}

//console.log(color('red'));
console.log(color());


/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

q= 0;

while (q < numericArray[32]) {
  console.log(numericArray[q]);
  q++;
}


console.log('Esercizio 9');
console.log(numericArray[q]);

// Correzione
let conta = 0;
while (numericArray[conta] !== 32) {
  console.log(numericArray[conta]);
  conta++;
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
console.log('Esercizio 10');

function alfabetoIta (p) {
  switch(p.toLowerCase()) {
    case 'd':
      return 4;

      case 'g':
      return 7;

      case 'n':
      return 14;

      case 'u':
      return 21;

      case 'z':
      return 26;

      default:
        return -1;
  }
}

console.log(alfabetoIta('g'));