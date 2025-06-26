// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleGameModeBtn = document.querySelector('.btn-toggle-game-mode');
    let isGameModeOn = true; // Initial state

    if (toggleGameModeBtn) {
        toggleGameModeBtn.addEventListener('click', () => {
            isGameModeOn =!isGameModeOn; // Toggle the state
            if (isGameModeOn) {
                toggleGameModeBtn.innerHTML = 'Game Mode: ON <span class="material-icons">toggle_on</span>';
                toggleGameModeBtn.style.backgroundColor = '#ffc107'; // Yellow
                toggleGameModeBtn.style.color = '#1a202c'; // Dark text
                console.log('Game Mode is now ON');
                // Add logic to show gamified elements (future sprint)
            } else {
                toggleGameModeBtn.innerHTML = 'Game Mode: OFF <span class="material-icons">toggle_off</span>';
                toggleGameModeBtn.style.backgroundColor = '#dc3545'; // Red
                toggleGameModeBtn.style.color = '#fff'; // Light text
                console.log('Game Mode is now OFF');
                // Add logic to hide gamified elements (future sprint)
            }
        });
    }

    // Placeholder for interactive map initialization (e.g., Leaflet, Mapbox GL JS)
    // const mapElement = document.getElementById('map-container');
    // if (mapElement) {
    //     // Initialize map library here
    //     console.log('Map container found. Map initialization logic would go here.');
    // }

    // Placeholder for dynamic event loading
    const loadMoreBtn = document.querySelector('.btn-load-more');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            console.log('Loading more events...');
            // Add logic to fetch and append more event cards (future sprint)
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});