const gridDom = document.getElementById('grid');
const playGrid = document.getElementById('button');
const casellaSelezione = document.getElementById('casellaSelezione');


let numberBlacklist = []; //qui ci finiscono tutti i numeri già usciti


function generateRandomNumber(min, max) {
    const number = Math.floor(Math.random() * (max - min +1)) + min;
    return number;
}

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

// funzione per creazione griglia e colore al click con variabile per le quantità


function griglia(numbreSquare) {

    gridDom.innerHTML = '';

    for (let i = 1; i <= numbreSquare; i++) {

        const newValidRandomNumber = generateUniqueRandomNumber(numberBlacklist, 1, numbreSquare);
        numberBlacklist.push(newValidRandomNumber);

        let elementoGriglia = document.createElement('div');
        elementoGriglia.classList.add("square");        
        // elementoGriglia.append(i);

        gridDom.append(elementoGriglia);
        
        elementoGriglia.append(newValidRandomNumber);


        elementoGriglia.addEventListener('click',
            function () {

                this.classList.toggle('bg-blue');

                // console.log(i);

            });
    }





}


// al click genera la griglia a seconda della difficoltà e nel valore inserito nella posizione precedente
// poi assegna la classe 10, 9, 7 a seconda di quanti elementi voglio in linea

playGrid.addEventListener('click',

    function () {
        let displayShow = document.getElementsByClassName('square');
        let casellaSelezioneScelta = casellaSelezione.value;


        switch (casellaSelezioneScelta) {

            case 'Difficoltà-1':
                griglia(10);
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

