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

document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".footer_icon");

    icons.forEach(icon => {
        icon.addEventListener("click", handleIconClick);
        icon.addEventListener("touchstart", handleIconClick);
    });

    function handleIconClick(event) {
        event.preventDefault(); 
        icons.forEach(i => i.classList.remove("active")); 
        this.classList.add("active"); 

        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const homeIcon = document.querySelector(".home-icon");

    homeIcon.addEventListener("click", (e) => {
        e.preventDefault(); 
        window.scrollTo({ top: 0, behavior: "smooth" }); 
    });
});

