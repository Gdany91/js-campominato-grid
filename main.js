
/* L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const button = document.getElementById('btn');
const container = document.querySelector('.container');

for (let i = 1; i < 101; i++) {
    button.addEventListener("click",
    
    function onClick(){

            
            
        const element = document.createElement('div');
        element.classList.add('square');
        container.append(element);
        element.append(i)

  }
 )
}

 element.addEventListener('click',
    
        function clicked() {

            const item_clicked = document.getElementsByClassName('square');
            item_clicked.classList.add ('clicked');
            
            
        }
 )














//  definisco la funzione per creare i blocchi 



    