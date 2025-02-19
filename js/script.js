
// Nedstående script ændrer billedet på forsiden, når musen køres henover/fjernes fra billedet

let forsidebillede = document.getElementById('forsidebillede'); /* Hentet HTML-elementet med id'et forsidebillede */

forsidebillede.addEventListener('mouseover', () => { // En eventListener, der venter på at musen er over billedet. () angiver, at der køres en funktion, når betingelsen (eventListeneren) opfyldes og denne funktion er, ved hjælp af pilesyntaxen =>, den funktion, der kommer under
    forsidebillede.src = "images/forsidebilledeHover.webp"; // Når betingelsen er opfyldt ændres billedets kilde (source)
});

forsidebillede.addEventListener('mouseleave', () => { // En eventListener, der venter på at musen er over billedet. () angiver, at der køres en funktion, når betingelsen (eventListeneren) opfyldes og denne funktion er, angivet ved hjælp af pilesyntaxen =>, den funktion, der kommer under
    forsidebillede.src = "images/forsidebillede.webp"; // Når betingelsen er opfyldt ændres billedet kilde (source)
});

// Script til burgermenu

const burgermenu = document.querySelector('.burgermenu'); // Henter HTML-elementet med ID'et

        const lukBurgermenu = document.getElementById('lukBurgermenu');

        burgermenu.addEventListener('click', () => {
            document.getElementById("navigationsmenu").classList.add("aktiv");
        })

        lukBurgermenu.addEventListener('click', () => {
            document.getElementById("navigationsmenu").classList.remove("aktiv");
        })
    