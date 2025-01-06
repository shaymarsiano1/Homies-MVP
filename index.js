// Function to check if the device is a mobile device by screen size
function isMobileByScreen() {
    return window.innerWidth <= 768; // Adjust threshold as needed for your design
}

document.addEventListener("DOMContentLoaded", () => {
    // Only run the code if the device is mobile
    if (!isMobileByScreen()) {
        console.log("Not a mobile device - functionality disabled");
        return; // Exit if the device is not mobile
    }

    console.log("Running on a mobile device");

    // Handle like button functionality
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', () => {
            const heartIcon = button.querySelector('i');

            // Toggle heart icon styles
            if (heartIcon.classList.contains('bi-heart')) {
                heartIcon.classList.remove('bi-heart');
                heartIcon.classList.add('bi-heart-fill');
                heartIcon.style.color = 'red';
            } else {
                heartIcon.classList.remove('bi-heart-fill');
                heartIcon.classList.add('bi-heart');
                heartIcon.style.color = '';
            }
        });
    });

    // Footer icons
    const icons = document.querySelectorAll(".footer_icon");
    const homeIcon = document.querySelector(".home-icon");

    // Attach event listeners for footer icons
    icons.forEach(icon => {
        ["click", "touchstart"].forEach(eventType => {
            icon.addEventListener(eventType, handleIconClick);
        });
    });

    // Event handler for footer icons
    function handleIconClick(event) {
        event.preventDefault(); // Prevent default behavior
        icons.forEach(i => i.classList.remove("active")); // Remove active state from all icons
        this.classList.add("active"); // Add active state to the clicked icon

        // If Home icon is clicked, scroll to the top
        if (this.querySelector(".home-icon")) {
            scrollToTop();
        }
    }

    // Attach direct event handlers to the Home icon for redundancy
    if (homeIcon) {
        ["click", "touchstart"].forEach(eventType => {
            homeIcon.addEventListener(eventType, (e) => {
                e.preventDefault();
                scrollToTop();
            });
        });
    }

    // Function to scroll to the top
    function scrollToTop() {
        console.log("Scrolling to top"); // Debug
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});
