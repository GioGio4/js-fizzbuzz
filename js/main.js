// TRACCIA
// 1 - Scrivi un programma che stampi in console i numeri da 1 a 100,
// 2 - Ma che per i multipli di 3 stampi in console "Fizz" al posto del
//     numero e per i multipli di 5 stampi "Buzz".
// 3-  Per i numeri che sono sia multipli di 3 che di 5 stampi in console "FizzBuzz".

console.log("Inizio Ciclo")

// VARIABILE CONTENITORE DEI "BOX"
const box_list = document.querySelector("div.row");

// console.log(box_list);

for (let i = 1; i <= 100; i++) {

    // Elemento creato, (dentro contenitore dei Box)
    const box_item_el = document.createElement("div");
    box_item_el.classList.add("box");

    // console.log(box_item_el);

    //  SE MULTIPLO DI 3 E 5 STAMPA "FIZZBUZZ" e aggiunta classe
    if (i % 3 == 0 && i % 5 == 0) {
        box_item_el.classList.add("fizzbuzz");
        box_item_el.innerHTML = ("FizzBuzz");
    }

    // ALTRIMENTI SE MULTIPLO DI 3 STAMPA "FIZZ" e aggiunta classe
    else if (i % 3 == 0) {
        box_item_el.classList.add("fizz");
        box_item_el.innerHTML = ("Fizz");

        // console.log("Fizz");
    }

    //  ALTRIMENTI SE MULTIPLO DI 5 STAMPA "BUZZ" e aggiunta classe
    else if (i % 5 == 0) {
        box_item_el.classList.add("buzz");
        box_item_el.innerHTML = ("buzz");
        // console.log("Buzz");
    }

    // ALTRIMENTI STAMPA (NUMERO) e aggiunta classe
    else {
        box_item_el.classList.add("number");
        box_item_el.innerHTML = (i);
    }


    box_list.append(box_item_el);
}

console.log("Fine ciclo")