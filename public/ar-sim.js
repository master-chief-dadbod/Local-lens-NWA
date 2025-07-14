// public/ar-sim.js

let videoElem;
let canvas;
let ctx;
let badges = [];
let streamStarted = false;

function initAR() {
    if (streamStarted) return;
    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        videoElem.srcObject = stream;
        streamStarted = true;
        requestAnimationFrame(drawLoop);
        spawnBadges();
    }).catch(err => {
        alert('Camera access denied: ' + err.message);
    });
}

function spawnBadges() {
    badges = [];
    for (let i = 0; i < 3; i++) {
        badges.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: 60,
            found: false
        });
    }
}

function drawLoop() {
    if (!streamStarted) return;
    ctx.drawImage(videoElem, 0, 0, canvas.width, canvas.height);
    badges.forEach(badge => {
        if (!badge.found) {
            ctx.drawImage(badgeImg, badge.x - badge.size/2, badge.y - badge.size/2, badge.size, badge.size);
        }
    });
    requestAnimationFrame(drawLoop);
}

function handleCanvasClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    badges.forEach(badge => {
        if (!badge.found && x > badge.x - badge.size/2 && x < badge.x + badge.size/2 && y > badge.y - badge.size/2 && y < badge.y + badge.size/2) {
            badge.found = true;
            alert('You found a badge!');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    videoElem = document.getElementById('ar-video');
    canvas = document.getElementById('ar-overlay');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        spawnBadges();
    });

    canvas.addEventListener('click', handleCanvasClick);

    document.getElementById('start-btn').addEventListener('click', initAR);
});

const badgeImg = new Image();
badgeImg.src = 'https://via.placeholder.com/60/ff0000/ffffff?text=B';
