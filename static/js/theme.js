// theme.js
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load and apply saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
    }

    // Toggle theme and save preference
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
            body.classList.remove("dark-theme");
            themeToggle.innerHTML = `<i class="fas fa-moon"></i>`;
            localStorage.setItem("theme", "light");
        } else {
            body.classList.add("dark-theme");
            themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
            localStorage.setItem("theme", "dark");
        }
    });
});
