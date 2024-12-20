// Compliments array
const compliments = [
    "Your smile lights up my entire world ✨",
    "You make every day better just by being in it 💖",
    "Your kindness touches everyone around you 🌸",
    "You're the most beautiful person, inside and out 💝",
    "Your laugh is my favorite sound in the world 🎵",
    "You inspire me to be a better person every day 🌟",
    "Your presence makes everything more beautiful 🌺",
    "You're the reason I believe in love 💕",
    "Your heart is pure gold 💫",
    "Every moment with you feels like magic ✨"
];

// DOM Elements
const generateBtn = document.getElementById('generateBtn');
const complimentDisplay = document.getElementById('complimentDisplay');
const floatingHeartsContainer = document.getElementById('floating-hearts');
const toast = document.getElementById('toast');

// Generate random compliment
function generateCompliment() {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentDisplay.textContent = randomCompliment;
    complimentDisplay.classList.add('show');
    
    showToast('💝 New compliment generated!');
    createFloatingHeart();
}

// Create floating heart
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
    
    floatingHeartsContainer.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

// Show toast message
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Create initial floating hearts
function createInitialHearts() {
    for (let i = 0; i < 10; i++) {
        setTimeout(createFloatingHeart, Math.random() * 2000);
    }
}

// Event Listeners
generateBtn.addEventListener('click', generateCompliment);
window.addEventListener('load', createInitialHearts);

// Create new hearts periodically
setInterval(createFloatingHeart, 3000);

// Add sparkle effect to title
const title = document.querySelector('.title');
title.addEventListener('mouseover', () => {
    title.style.transform = 'scale(1.05)';
    setTimeout(() => {
        title.style.transform = 'scale(1)';
    }, 200);
});






document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${e.clientX}px`;
    sparkle.style.top = `${e.clientY}px`;
    sparkle.innerHTML = '✨';

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 500);
});





document.getElementById('bottleBtn').addEventListener('click', () => {
    const hiddenMessage = document.getElementById('hiddenMessage');
    hiddenMessage.classList.add('show');
});



const canvas = document.getElementById("starrySky");
const ctx = canvas.getContext("2d");
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.1
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw stars
    ctx.fillStyle = "#FFFFFF";
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.x -= star.speed;
        if (star.x < 0) star.x = canvas.width;
    });

    // Draw the name "Simmon" in the center of the stars
    ctx.font = "40px Arial";
    ctx.fillStyle = "#FF69B4";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";  // To align the text vertically in the center
    ctx.fillText("Dear Simmon.", canvas.width / 2, canvas.height / 2);

    requestAnimationFrame(drawStars);
}

drawStars();
