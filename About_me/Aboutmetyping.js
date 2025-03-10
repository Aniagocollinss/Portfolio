document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed("#typing-effect", {
        strings: ["Mechanical Engineer", "Front-End Developer", "Artist"], // Your text
        typeSpeed: 50,
        backSpeed: 25,
        loop: true,
        showCursor: false, // Hide cursor
        smartBackspace: true,
        fadeOut: false,
    });

    // Ensure the element is visible
    document.getElementById("typing-effect").style.display = "inline-block";
});
