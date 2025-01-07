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
        icon.addEventListener("click", () => {
            icons.forEach(i => i.classList.remove("active"));
            icon.classList.add("active");
        });
    });

    const homeIcon = document.querySelector(".home-icon"); 

    if (homeIcon) {
        homeIcon.addEventListener("click", (event) => {
            event.preventDefault(); 
            window.scrollTo({ top: 0, behavior: "smooth" }); 
        });
    }
});






document.addEventListener("DOMContentLoaded", () => {
    // Open and close the filter sidebar
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const filterSidebar = document.getElementById("filterSidebar");
    const closeSidebar = document.getElementById("closeSidebar");

    // Open sidebar
    dropdownToggle.addEventListener("click", () => {
        filterSidebar.classList.add("show");
    });

    // Close sidebar
    closeSidebar.addEventListener("click", () => {
        filterSidebar.classList.remove("show");
    });

    // Handle Price Range Updates
    const minPriceRange = document.getElementById("minPriceRange");
    const maxPriceRange = document.getElementById("maxPriceRange");
    const minPriceDisplay = document.getElementById("minPriceDisplay");
    const maxPriceDisplay = document.getElementById("maxPriceDisplay");
    const minPriceInput = document.getElementById("minPrice");
    const maxPriceInput = document.getElementById("maxPrice");

    function updatePriceDisplay() {
        const minPrice = parseInt(minPriceRange.value);
        const maxPrice = parseInt(maxPriceRange.value);

        if (minPrice > maxPrice) {
            alert("Minimum price cannot exceed maximum price.");
            return;
        }

        // Update text display
        minPriceDisplay.textContent = `$${minPrice}`;
        maxPriceDisplay.textContent = `$${maxPrice}`;

        // Update input values
        minPriceInput.value = minPrice;
        maxPriceInput.value = maxPrice;
    }

    minPriceRange.addEventListener("input", updatePriceDisplay);
    maxPriceRange.addEventListener("input", updatePriceDisplay);

    // Validate input fields
    function validateInputs(inputs) {
        for (const input of inputs) {
            if (isNaN(parseInt(input.value)) || input.value.trim() === "") {
                alert(`Please enter a valid number for ${input.name}`);
                input.focus(); // Focus on the invalid input
                return false;
            }
        }
        return true;
    }

    document.getElementById("applyFilters").addEventListener("click", () => {
        const roomType = document.getElementById("roomType").value;
        const minPrice = minPriceRange.value;
        const maxPrice = maxPriceRange.value;
        const roommates = document.getElementById("roommates");
        const rooms = document.getElementById("rooms");

        // Validate numeric inputs
        if (!validateInputs([roommates, rooms])) {
            return;
        }

        // Log filters (replace with logic to display results)
        console.log({
            roomType,
            minPrice,
            maxPrice,
            roommates: roommates.value,
            rooms: rooms.value,
        });

        filterSidebar.classList.remove("show");
    });

    // Handle Clear Filters
    document.getElementById("clearFilters").addEventListener("click", () => {
        document.getElementById("roomType").value = "any";
        minPriceRange.value = "500";
        maxPriceRange.value = "3000";
        minPriceDisplay.textContent = "$500";
        maxPriceDisplay.textContent = "$3000";
        document.getElementById("roommates").value = "2";
        document.getElementById("rooms").value = "2";
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const personIcon = document.querySelector(".person-icon"); 
    const homeIcon = document.querySelector(".home-icon"); 
    const messagesIcon = document.querySelector(".messages-icon"); 
    const profilePage = document.getElementById("profilePage"); 
    const messagesPage = document.getElementById("massagesPage"); 

    profilePage.style.display = "none";
    messagesPage.style.display = "none";

    function toggleMessagesPage() {
        const isVisible = messagesPage.style.display === "block";
        messagesPage.style.display = isVisible ? "none" : "block"; 
        profilePage.style.display = "none"; 
    }

    function showProfilePage() {
        profilePage.style.display = "block"; 
        messagesPage.style.display = "none"; 
    }

    function hideAllPages() {
        profilePage.style.display = "none"; 
        messagesPage.style.display = "none"; 
    }

    messagesIcon.addEventListener("click", toggleMessagesPage); 
    personIcon.addEventListener("click", showProfilePage); 
    homeIcon.addEventListener("click", hideAllPages); 
});
