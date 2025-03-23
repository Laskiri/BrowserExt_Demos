const controlsPanel = document.querySelector(".ytp-chrome-controls");

if (controlsPanel) {
    // Sørger for at controls panelet er positioneret relativt (nødvendigt for at knappen kan positioneres korrekt)
    controlsPanel.style.position = "relative";

    // Laver vores knap til kontrolpanelet
    const button = document.createElement("button");
    button.classList.add("ytp-button");
    button.title = "Afspil en lydeffekt";
    button.textContent = "📢";

    // styling til knappen og centrer den i forehold til controls panelet
    button.style.position = "absolute";
    button.style.top = "50%";
    button.style.left = "50%";
    button.style.transform = "translate(-50%, -50%)"; // Center the button
    button.style.fontSize = "24px"; 
    button.style.width = "auto"; 
    button.style.height = "48px"; 
    button.style.margin = "0"; 

    // tilføj knappen til "ytp-chrome-buttom" elementet
    controlsPanel.prepend(button);
    
    button.addEventListener("click", () => {
        playSound();
    });
} else {
    console.log("Kunne ikke finde kontrol panelet");
}

const audio = new Audio(chrome.runtime.getURL("assets/Boom.mp3"));
const audios = [audio]; // dette er et array, som kan indeholde flere lydeffekter, første lyd tilgås med audios[0], anden med audios[1] osv.

const playSound = () => {
    audios[0].play();
    // Opagve: Implementer logic for at afspille en tilfældig lyd
        // hint: du skal generere et tilfældigt tal mellem 0 og antallet af lydeffekter i arrayet
        // hint: brug Math.random() og Math.floor(), og audios.length
        // hint: brug det tilfældige tal til at vælge en lydeffekt fra arrayet  
}