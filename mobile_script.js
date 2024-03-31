// Animation de zoom sur le texte
const title = document.querySelector('h1');
const paragraphs = document.querySelectorAll('p');

// Fonction d'animation de zoom
function zoomIn() {
    title.style.transition = 'transform 0.5s ease';
    title.style.transform = 'scale(1.1)';

    paragraphs.forEach(paragraph => {
        paragraph.style.transition = 'transform 0.5s ease';
        paragraph.style.transform = 'scale(1.1)';
    });
}

// Appel de la fonction d'animation après un court délai pour laisser le temps au DOM de se charger
setTimeout(zoomIn, 500);
