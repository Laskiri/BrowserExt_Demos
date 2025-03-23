chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.videoId) {
        // Variabler til at styre videoens position og størrelse
        let top = 50; // Start position fra toppen i procent
        let left = 50; // Start position fra venstre i procent
        let width = 560; // Start bredde af video
        let height = 315; // Start højde af video

        // lav et iframe element, som videon skal vises i
        const iframe = document.createElement('iframe');
        iframe.width = `${width}`;
        iframe.height = `${height}`;
        iframe.src = `https://www.youtube.com/embed/${request.videoId}`;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;

        
        // lav et container element, som iframe elementet skal ligge i
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.top = `${top}%`; // sæt position fra toppen
        container.style.left = `${left}%`; // sæt position fra venstre
        container.style.transform = 'translate(-50%, -50%)';
        container.style.zIndex = '1000'; // det her er for at sikre at videoen altid er forrest
        container.appendChild(iframe); // tilføj iframe elementet som 'barn' til container elementet


        // Opgave 1: Gør så man kan bevæge videoen med piletasterne 
           // hint: brug ArrowUp, ArrowDown, ArrowLeft, ArrowRight og else if statements 
              
        // Opgave 2: Gør så man skalere videoen med + og - tasterne
           // hint: brug + og - tasterne, og husk at vedligeholde aspect ratioen
        
        // begynderkode til opgaverne    
        document.addEventListener('keydown', (event) => {
            const key = event.key; // hvilken tast der er trykket på
            const moveStep = 5; // Hvor meget videon bevæger sig pr. tastetryk
            const scaleStep = 20; // Hvor meget videon skaleres pr. tastetryk
            const aspectRatio = 560 / 315; // Aspect ratio for videon
            if (key === 'ArrowUp') {
                top = top - moveStep; // opdater top position
            } // tilføj resten af if statements
            else if (true) {
                // fortsæt her,  husk også at ændre conditionen
            }
            iframe.width = width; // opdater bredden på videon
            iframe.height = height; // opdater højden på videon
            container.style.top = `${top}%`; // opdater top position
            container.style.left = `${left}%`; // opdater left position
        });

        
        document.body.appendChild(container); // tilføj container elementet til body elementet (hjemmesiden)
    }
});