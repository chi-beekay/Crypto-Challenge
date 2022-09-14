const navMenu = document.getElementById("nav-menu");
const close = document.getElementById("nav-close");
const open = document.getElementById("nav-open");

open.addEventListener("click", () => {
  //   console.log("open");
  navMenu.classList.add("show-menu");
});

close.addEventListener("click", () => {
  //   console.log("close");
  navMenu.classList.remove("show-menu");
});

// Remove Menu Mobile
const navLinks = document.querySelectorAll(".nav-link");

// function for removing menu when clicked on
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  })
);

const cards = document.querySelectorAll(".card");
// const btns = document.querySelectorAll("#check-btn");

cards.forEach((card) =>
  card.addEventListener("click", () => {
    let active = document.getElementsByClassName("active");
    active[0].className = active[0].className.replace("active", "");
    card.className += " active";

    // btns.forEach((btn) => btn.classList.add("show-btn"));

    // card.classList.add("active");
  })
);

const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  delay: 400,
  reset: true,
});

sr.reveal(
  `.home-details, .home-image, .check-h1, .check-p, .check-trade-h1, .market-h1, .market-grid__text`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(`.why-details__img, .card-1, .card-2, .card-3`, {
  origin: "left",
  // interval: 100,
});

sr.reveal(`.card-1 `, {
  delay: 400,
  // interval: 100,
});

sr.reveal(`.card-2 `, {
  delay: 600,
  // interval: 100,
});

sr.reveal(`.card-3 `, {
  delay: 800,
  // interval: 100,
});

sr.reveal(`.why-details__text`, {
  origin: "right",
  interval: 100,
});

sr.reveal(`.why-tally, .check-card, .market-img, .start-card`, {
  origin: "bottom",
  interval: 100,
});
