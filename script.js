document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Multi-language loading text effect
    const loadingTexts = [
        "Loading...", "लोड हो रहा है...", "Cargando...", "加载中...",
        "لوڈ ہو رہا ہے...", "लोडयति...", "読み込み中...", "Chargement...",
        "Lädt...", "Загрузка..."
    ];

    let index = 0;
    const loadingTextElement = document.getElementById("glitch-text");

    function changeText() {
        if (index < loadingTexts.length) {
            loadingTextElement.textContent = loadingTexts[index];
            index++;
            setTimeout(changeText, 300); // Change every 300ms
        }
    }

    changeText(); // Start the text animation

    // Preloader logic to hide after 3 seconds
    setTimeout(() => {
        document.getElementById("preloader").classList.add("fadeOut"); // Apply fade-out effect
        setTimeout(() => {
            document.getElementById("preloader").style.display = "none"; // Hide preloader
            document.getElementById("content").style.display = "block"; // Show main content
        }, 500); // Wait for fade-out animation to finish
    }, 3000); // Total preloading time

    // Game card hover effects
    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px) scale(1.05)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0) scale(1)";
        });

        card.addEventListener("mousemove", (e) => {
            const cardRect = card.getBoundingClientRect();
            const percentX = (e.clientX - (cardRect.left + cardRect.width / 2)) / (cardRect.width / 2);
            const percentY = (e.clientY - (cardRect.top + cardRect.height / 2)) / (cardRect.height / 2);

            card.style.transform = `perspective(1000px) rotateY(${percentX * 5}deg) rotateX(${-percentY * 5}deg)`;
        });
    });

    // Hide default cursor
    document.body.style.cursor = "none";

    // Show default cursor when leaving the window
    document.addEventListener("mouseout", function (e) {
        if (e.relatedTarget === null) {
            document.body.style.cursor = "auto";
        }
    });

    document.addEventListener("mouseover", function () {
        document.body.style.cursor = "none";
    });
});
