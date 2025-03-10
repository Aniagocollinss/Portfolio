document.addEventListener("DOMContentLoaded", function () {
    const skills = document.querySelectorAll(".skills-list .badge");

    function popSkill(skill) {
        skill.style.transform = "scale(1.2)";
        setTimeout(() => {
            skill.style.transform = "scale(1)";
        }, 500);
    }

    function randomPop() {
        const randomIndex = Math.floor(Math.random() * skills.length);
        popSkill(skills[randomIndex]);
        setTimeout(randomPop, 800);
    }

    randomPop();
});
