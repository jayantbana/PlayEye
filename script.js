  // JavaScript to enable smooth scrolling for navigation links
  document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Mouse tracking cursor effect
document.body.style.cursor = "url('https://cur.cursors-4u.net/games/gam-1/gam16.ani'), auto";


// Start the animation
animateCursor();

// Special effects when hovering over game cards
const gameCards = document.querySelectorAll('.game-card');

gameCards.forEach(card => {
// Grow cursor when hovering over cards
card.addEventListener('mouseenter', () => {
    cursorOuter.classList.add('cursor-hover');
    cursorInner.classList.add('cursor-hover');
});

card.addEventListener('mouseleave', () => {
    cursorOuter.classList.remove('cursor-hover');
    cursorInner.classList.remove('cursor-hover');
});

// Add card tilt effect
card.addEventListener('mousemove', (e) => {
    const cardRect = card.getBoundingClientRect();
    const cardCenterX = cardRect.left + cardRect.width / 2;
    const cardCenterY = cardRect.top + cardRect.height / 2;
    
    // Calculate distance from center (normalized from -1 to 1)
    const percentX = (e.clientX - cardCenterX) / (cardRect.width / 2);
    const percentY = (e.clientY - cardCenterY) / (cardRect.height / 2);
    
    // Apply the tilt effect (max 10 degrees rotation)
    card.style.transform = `perspective(1000px) rotateY(${percentX * 5}deg) rotateX(${-percentY * 5}deg) translateZ(10px)`;
});

// Reset transform when mouse leaves
card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    setTimeout(() => {
        // Re-apply the hover effect without the tilt
        if (card.matches(':hover')) {
            card.style.transform = 'translateY(-15px) scale(1.03)';
        }
    }, 50);
});
});

// Hide default cursor
document.body.style.cursor = 'none';

// Show default cursor when cursor leaves the window
document.addEventListener('mouseout', function(e) {
if (e.relatedTarget === null) {
    document.body.style.cursor = 'auto';
    cursorOuter.style.display = 'none';
    cursorInner.style.display = 'none';
}
});

document.addEventListener('mouseover', function() {
document.body.style.cursor = 'none';
cursorOuter.style.display = 'block';
cursorInner.style.display = 'block';
});
});
// Image roller/slider for game showcase

  

setTimeout(() => {
    document.getElementById("preloader").classList.add("fadeOut"); // Fade out preloader
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none"; // Remove preloader
        document.getElementById("content").style.display = "block"; // Show main website
    }, 500); // Wait for fade-out animation to finish
}, 3000);