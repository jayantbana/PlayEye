document.addEventListener("DOMContentLoaded", function () {
    // 🔹 Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 🔹 Multi-language Loading Text Effect
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

    // 🔹 Preloader Logic (Improved Smooth Transition)
    setTimeout(() => {
        document.getElementById("preloader").classList.add("fadeOut");
        setTimeout(() => {
            document.getElementById("preloader").style.opacity = "0";
            document.getElementById("preloader").style.visibility = "hidden";
            document.getElementById("content").style.opacity = "1";
        }, 500);
    }, 3000);

    // 🔹 Game Card Hover Effects
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

    // 🔹 Fix Cursor Visibility Issue
    document.body.style.cursor = "none";

    document.addEventListener("mouseout", function (e) {
        if (e.relatedTarget === null) {
            document.body.style.cursor = "auto";
        }
    });

    document.addEventListener("mouseover", function () {
        document.body.style.cursor = "none";
    });

    // 🔹 Background Music Controls (Fixed)
    const songs = [
        "cc9dc2de17905a042f36090791a93bfa0_160.m4a",
        "song2.mp3",
        "song3.mp3",
        "song4.mp3",
        "song5.mp3"
    ];

    let currentSongIndex = 0;
    const music = document.getElementById("bg-music");
    const musicBtn = document.getElementById("music-btn");
    const prevBtn = document.getElementById("prev-song");
    const nextBtn = document.getElementById("next-song");
    const audioSource = document.getElementById("audio-source");

    function toggleMusic() {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "🔇 Pause";
        } else {
            music.pause();
            musicBtn.textContent = "🔊 Play";
        }
    }

    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        changeSong();
    }

    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        changeSong();
    }

    function changeSong() {
        audioSource.src = songs[currentSongIndex];
        music.load();
        music.play();
        musicBtn.textContent = "🔇 Pause";
    }

    musicBtn.addEventListener("click", toggleMusic);
    prevBtn.addEventListener("click", prevSong);
    nextBtn.addEventListener("click", nextSong);

    window.addEventListener("load", () => {
        music.volume = 0.5;
        changeSong();
    });

    // 🔹 Category Filtering (Fixed Layout Issues)
    const categoryButtons = document.querySelectorAll(".category-btn");

    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            gameCards.forEach(card => {
                if (category === "all" || card.getAttribute("data-category") === category) {
                    card.style.opacity = "1";
                    card.style.visibility = "visible";
                    card.style.transform = "scale(1)";
                } else {
                    card.style.opacity = "0";
                    card.style.visibility = "hidden";
                    card.style.transform = "scale(0.8)";
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".game-card");

    const revealCards = () => {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            const cardBottom = card.getBoundingClientRect().bottom;

            if (cardTop < triggerBottom && cardBottom > 0) {
                card.classList.add("show");
            } else {
                card.classList.remove("show"); // Remove class when out of view
            }
        });
    };

    window.addEventListener("scroll", revealCards);
    revealCards(); // Initial check when page loads
});
window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;
    document.getElementById("parallax").style.backgroundPositionY = scrollPosition * 0.5 + "px";
});


