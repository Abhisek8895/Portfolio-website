// Placeholder for custom JavaScript if needed
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded successfully!");
});
document.addEventListener("DOMContentLoaded", function () {
    // Sidebar functionality
    const sidebarLinks = document.querySelectorAll(".sidebar .nav-link");
    const sections = document.querySelectorAll("main section");

    // Function to show a specific section
    function showSection(targetId) {
        sections.forEach((section) => {
            section.classList.remove("active");
            if (section.id === targetId) {
                section.classList.add("active");
            }
        });
    }

    // Attach click event to each sidebar link
    sidebarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = link.getAttribute("href").substring(1); // Extract the target ID
            showSection(targetId);
        });
    });

    // Show the first section by default
    if (sections.length > 0) {
        sections[0].classList.add("active");
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const navLinks = document.querySelectorAll('.sidebar .nav-link');

    // Toggle sidebar visibility on button click
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    // Close sidebar when clicking a link inside the sidebar
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('show');
        });
    });
});
