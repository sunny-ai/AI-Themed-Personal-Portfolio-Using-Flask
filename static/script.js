const dynamicTexts = [
    "Robotics Engineer",
    "Artificial Intelligence Enthusiast",
    "Problem Solver"
];

function typeDynamicTexts() {
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    const typingSound = new Audio("typing-sound.mp3"); 
    typingSound.loop = true; 

    function type() {
        if (count === dynamicTexts.length) {
            count = 0;
        }
        currentText = dynamicTexts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typing-text').textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
        }

        setTimeout(type, 500);
        delay(500);
    }

    document.addEventListener("click", () => {
        typingSound.play();

        document.removeEventListener("click", handleFirstInteraction);

        type();
    });

    function handleFirstInteraction() {
        typingSound.play();
        type();
    }


    document.addEventListener("click", handleFirstInteraction);
}

window.onload = typeDynamicTexts;
