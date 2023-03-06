const gridDom = document.getElementById('grid');
const playGrid = document.getElementById('button');
const casellaSelezione = document.getElementById('casellaSelezione');
const sommaDom = document.getElementById('sommaCelle');



// funzione per creazione griglia e colore al click con variabile per le quantità

let arrayBombe = [];

// numero casuale
function generateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

// numero casuale unico
function generateUniqueRandomNumber(blacklist, min, max) {

    let isValidNumber = false;
    let randomNumber;

    while (!isValidNumber) {
        randomNumber = generateRandomNumber(min, max);
        if (!blacklist.includes(randomNumber)) {
            isValidNumber = true;
        }
    }
    return randomNumber;
}



function griglia(numbreSquare) {

    gridDom.innerHTML = '';

    for (let i = 1; i <= 16; i++) {
        const bombaGenerata = generateUniqueRandomNumber(arrayBombe, 1, numbreSquare);
        arrayBombe.push(bombaGenerata);
    }

    // griglia

    for (let i = 1; i <= numbreSquare; i++) {

        let elementoGriglia = document.createElement('div');
        elementoGriglia.classList.add("square");
        elementoGriglia.append(i);


        let bomba = false;

        for (let j = 0; j < arrayBombe.length; j++) {
            if (i == arrayBombe[j]) {
                bomba = true;
                console.log(i);
            }
        }

        gridDom.append(elementoGriglia);

        elementoGriglia.addEventListener('click',
            function () {

                if (bomba) {
                    this.classList.toggle('bg-red');
                    removeEventListener('click', function(){});
                    // alert('Hai cliccato su una bomba');


                } else {
                    this.classList.toggle('bg-blue');
                    sommaCelle += 1;
                    sommaDom.innerText = `Somma: ${sommaCelle}`;

                }
                console.log(i);

            });
    }

}

let sommaCelle = 0; // Somma delle celle blu cliccate



// al click genera la griglia a seconda della difficoltà e nel valore inserito nella posizione precedente
// poi assegna la classe 10, 9, 7 a seconda di quanti elementi voglio in linea

playGrid.addEventListener('click',

    function () {
        let displayShow = document.getElementsByClassName('square');
        let casellaSelezioneScelta = casellaSelezione.value;


        switch (casellaSelezioneScelta) {

            case 'Difficoltà-1':
                griglia(100);
                for (let i = 0; i < displayShow.length; i++) {
                    displayShow[i].classList.add("linea10");

                }
                break;
            case 'Difficoltà-2':
                griglia(81);
                for (let i = 0; i < displayShow.length; i++) {
                    displayShow[i].classList.add("linea9");
                }
                break;
            case 'Difficoltà-3':
                griglia(49);
                for (let i = 0; i < displayShow.length; i++) {
                    displayShow[i].classList.add("linea7");
                }
                break;
            default:
                break;
        }

        for (let i = 0; i < displayShow.length; i++) {
            displayShow[i].classList.toggle('d-flex');
        }
    });

