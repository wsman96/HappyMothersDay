document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".page");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentPageIndex = 0;

  function showPage(index) {
    // Hide all pages
    pages.forEach((page) => {
      page.classList.remove("active");
    });

    // Show the selected page
    if (pages[index]) {
      pages[index].classList.add("active");
    }

    // Show confetti on last page
    if (index === pages.length - 1) {
      showConfetti();
    }

    // Update button states
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === pages.length - 1;
  }

  // Confetti effect for last page
  function showConfetti() {
    const confettiColors = [
      "#e25555",
      "#a05a9c",
      "#f9c46b",
      "#7d3c98",
      "#fff6fa",
    ];
    const confettiContainer = document.createElement("div");
    confettiContainer.className = "confetti";
    for (let i = 0; i < 36; i++) {
      const confetti = document.createElement("div");
      confetti.className = "confetti-piece";
      confetti.style.background =
        confettiColors[Math.floor(Math.random() * confettiColors.length)];
      confetti.style.left = Math.random() * 95 + "%";
      confetti.style.top = Math.random() * 10 + "%";
      confetti.style.animationDelay = Math.random() * 0.7 + "s";
      confettiContainer.appendChild(confetti);
    }
    document.querySelector(".card-container").appendChild(confettiContainer);
    setTimeout(() => confettiContainer.remove(), 2200);
  }

  // Mother's Day themed floating hearts effect
  function createFloatingHeart() {
    const heartColors = [
      "#e25555",
      "#a05a9c",
      "#f9c46b",
      "#7d3c98",
      "#fff6fa",
      "#ff8da1",
      "#ffb347",
      "#b39ddb",
    ];
    const heartSVG = (color) =>
      `<svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M16 29s-1.5-1.3-3.7-3.1C5.7 20.1 1 15.6 1 10.5 1 5.5 5.5 1 10.5 1c2.7 0 5.3 1.4 6.5 3.6C18.2 2.4 20.8 1 23.5 1 28.5 1 33 5.5 33 10.5c0 5.1-4.7 9.6-11.3 15.4C17.5 27.7 16 29 16 29z" fill="${color}"/></svg>`;
    const heart = document.createElement("div");
    heart.className = "flower"; // reuse .flower class for animation
    heart.style.left = Math.random() * 95 + "%";
    heart.style.bottom = "-40px";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.innerHTML = heartSVG(
      heartColors[Math.floor(Math.random() * heartColors.length)]
    );
    document.querySelector(".card-container").appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }

  function startHeartEffect() {
    setInterval(createFloatingHeart, 1200);
  }

  // Event listeners for buttons
  nextBtn.addEventListener("click", () => {
    if (currentPageIndex < pages.length - 1) {
      currentPageIndex++;
      showPage(currentPageIndex);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentPageIndex > 0) {
      currentPageIndex--;
      showPage(currentPageIndex);
    }
  });

  // Show the first page on load
  showPage(currentPageIndex);
  startHeartEffect();
});
