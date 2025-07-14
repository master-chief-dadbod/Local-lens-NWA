// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleGameModeBtn = document.querySelector('.btn-toggle-game-mode');
    let isGameModeOn = true; // Initial state

    if (toggleGameModeBtn) {
        toggleGameModeBtn.addEventListener('click', () => {
            isGameModeOn = !isGameModeOn; // Toggle the state
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

    // Placeholder for interactive map initialization (future)
    // ...

    // Basic dynamic event loading for demo purposes
    const extraEvents = [
        {
            img: 'https://via.placeholder.com/400x250/ff5722/ffffff?text=Art+Walk',
            title: 'Downtown Art Walk',
            date: 'September 10, 2025',
            location: 'Springdale Arts District',
            description: 'Tour local galleries with guided commentary.'
        },
        // Additional events omitted for brevity...
    ];

    const loadMoreBtn = document.querySelector('.btn-load-more');
    const eventGrid = document.querySelector('.event-grid');
    if (loadMoreBtn && eventGrid) {
        loadMoreBtn.addEventListener('click', () => {
            extraEvents.forEach(evt => {
                const card = document.createElement('div');
                card.className = 'event-card';
                card.innerHTML = `
                    <img src="${evt.img}" alt="Event Image">
                    <div class="card-content">
                        <h3>${evt.title}</h3>
                        <p class="event-date"><span class="material-icons">calendar_today</span> ${evt.date}</p>
                        <p class="event-location"><span class="material-icons">location_on</span> ${evt.location}</p>
                        <p class="event-description">${evt.description}</p>
                        <a href="#" class="btn btn-link">View Details <span class="material-icons">chevron_right</span></a>
                    </div>`;
                eventGrid.appendChild(card);
            });
            loadMoreBtn.disabled = true;
            loadMoreBtn.textContent = 'No More Events';
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
