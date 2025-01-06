document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.like-button').forEach(button => {
        button.addEventListener('click', () => {
            const heartIcon = button.querySelector('i');

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

    const icons = document.querySelectorAll(".footer_icon");
    const homeIcon = document.querySelector(".home-icon");

    icons.forEach(icon => {
        ["click", "touchstart"].forEach(eventType => {
            icon.addEventListener(eventType, handleIconClick);
        });
    });

    function handleIconClick(event) {
        event.preventDefault(); 
        icons.forEach(i => i.classList.remove("active")); // Remove active state from all icons
        this.classList.add("active"); // Add active state to the clicked icon

        if (this.querySelector(".home-icon")) {
            scrollToTop();
        }
    }

    if (homeIcon) {
        ["click", "touchstart"].forEach(eventType => {
            homeIcon.addEventListener(eventType, (e) => {
                e.preventDefault();
                scrollToTop();
            });
        });
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});
