// Select menu icon and navigation bar
const menuIcon = document.getElementById("menu-icon");
const topNav = document.getElementById("top-nav");

// Toggle navigation bar visibility on icon click
menuIcon.addEventListener("click", function () {
    topNav.classList.toggle("active");
});
