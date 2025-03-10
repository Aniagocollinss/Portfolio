document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".typing-text");
    const text = "My Projects";
    let index = 0;

    function type() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(type, 100);
        } else {
            textElement.style.borderRight = "none"; // Remove cursor effect
        }
    }

    textElement.textContent = ""; // Clear text before typing starts
    type();
});
