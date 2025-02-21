
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

// Script for loadinganimation

const loadingAnimation = document.getElementById('loading-animation'); // Henter animationen i HTML

const links = document.querySelectorAll('a'); // Gemmer alle anchortags
        
links.forEach(link => { // For hver link repræsenteret ved link...
    link.addEventListener('click', () => { // Tilføjes der en eventlisteninger, der lytter på et klik. Når der klikkes...
        if(link.target === '_blank') { // Hvis linket fører til et nyt vindue... - dog griber denne if-sætning IKKE tilfælde, hvor Cmd eller Ctrl holdes nede ved klik og linket åbnes i ny fane
            // ...sker der ikke noget (så loadinganimationen ikke snurrer rundt, når man har trykker på linkedin-ikonet)
        } else {
            loadingAnimation.style.display = 'flex'; // Vises animationen
        }
    }) 
});

window.addEventListener('load', () => { // Der tilføjer en eventlistener på vinduet, der lytter på, om siden er loaded
    loadingAnimation.style.display = 'none'; // Når siden er loaded skjules animationen
});