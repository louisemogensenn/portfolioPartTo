
// Nedstående script ændrer billedet på forsiden, når musen køres henover/fjernes fra billedet

let forsidebillede = document.getElementById('forsidebillede');

// Der opsættes en if-sætning, der undersøger, om der findes et HTML-element med ID'et forsidebillede - ellers køres den ikke
// Denne if-sætning er relevant for at undgå unødvendig kode på sider, hvor indhold ikke eksisterer
if (forsidebillede) { // 
    forsidebillede.addEventListener('mouseover', () => { // Når man holder musen over...
        forsidebillede.src = "images/forsidebilledeHover.webp"; // Ændres billedets kilde
    });

    forsidebillede.addEventListener('mouseleave', () => { // Når musen fjernes fra billeder ...
        forsidebillede.src = "images/forsidebillede.webp"; // Ændres billedets kilde
    });
}

// Script til burgermenu

const burgermenu = document.querySelector('.burgermenu'); // Henter HTML-elementet med ID'et

const lukBurgermenu = document.querySelector('.lukBurgermenu'); // Henter det første HTML-element med klassen

const navigationsmenu = document.querySelector('.navigationsmenu');  // Henter det første HTML-element med klassen

burgermenu.addEventListener('click', () => { // Når brugeren klikker på burgermenuen
    navigationsmenu.classList.add("aktiv"); // Vises navigationsmenuen
})

lukBurgermenu.addEventListener('click', () => { // Når brugeren klikker på krydset
    navigationsmenu.classList.remove("aktiv"); // Skjules navigationsmenuen
})
