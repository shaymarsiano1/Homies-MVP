document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        const heartIcon = button.querySelector('i');

        // Toggle between outlined and filled heart
        if (heartIcon.classList.contains('bi-heart')) {
            heartIcon.classList.remove('bi-heart');
            heartIcon.classList.add('bi-heart-fill');
            heartIcon.style.color = 'red'; // Change to red on click
        } else {
            heartIcon.classList.remove('bi-heart-fill');
            heartIcon.classList.add('bi-heart');
            heartIcon.style.color = ''; // Reset to the default color
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".footer_icon");

    icons.forEach(icon => {
        icon.addEventListener("click", () => {
            // Remove the 'active' class from all icons
            icons.forEach(i => i.classList.remove("active"));
            
            // Add the 'active' class to the clicked icon
            icon.classList.add("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.querySelector(".home-link");

    homeLink.addEventListener("click", (e) => {
        // Prevent default behavior for anchor links
        e.preventDefault();

        // Scroll smoothly to the top of the page or a specific section
        document.querySelector("#home-section").scrollIntoView({ behavior: "smooth" });
    });
});

