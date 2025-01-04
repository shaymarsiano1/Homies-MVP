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
