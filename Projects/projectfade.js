document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".project-card");

    function revealCards() {
        cards.forEach(card => {
            if (card.getBoundingClientRect().top < window.innerHeight * 0.9) {
                card.classList.add("show");
            }
        });
    }

    revealCards();
    window.addEventListener("scroll", revealCards);
});
