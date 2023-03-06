const gridDom = document.getElementById('grid');
const playGrid = document.getElementById('button');
const casellaSelezione = document.getElementById('casellaSelezione');


// funzione per creazione griglia e colore al click con variabile per le quantità


function griglia(numbreSquare, newValidRandomNumber ) {    

    gridDom.innerHTML = '';

    for (let i = 1; i <= numbreSquare; i++) {
        let elementoGriglia = document.createElement('div');
        elementoGriglia.classList.add("square");
        gridDom.append(elementoGriglia);   

        elementoGriglia.addEventListener('click',
            function () {
                this.classList.toggle('bg-blue');
                elementoGriglia.append(i);

                console.log(i);
                // console.log(this.innerHTML);
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