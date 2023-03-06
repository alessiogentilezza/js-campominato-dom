const gridDom = document.getElementById('grid');
const playGrid = document.getElementById('button');
const casellaSelezione = document.getElementById('casellaSelezione');


// funzione per creazione griglia e colore al click con variabile per le quantità



let numeriRossi = []; //qui ci finiscono tutti i numeri già usciti

function griglia(numbreSquare) {

    gridDom.innerHTML = '';

    while (numeriRossi.length < 16) {
        const randomNum = Math.floor(Math.random() * numbreSquare) + 1;
        if (!numeriRossi.includes(randomNum)) {
          numeriRossi.push(randomNum);
          console.log(randomNum);
        }
      }
        

    for (let i = 1; i <= numbreSquare; i++) {

        let elementoGriglia = document.createElement('div');
        elementoGriglia.classList.add("square");
        elementoGriglia.append(i);

        gridDom.append(elementoGriglia);


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

