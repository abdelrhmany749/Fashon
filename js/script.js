// navbar show and hide

const NavBaro = document.getElementById("navbaro");
const ToogleBars = document.getElementById("toogle-bars");

ToogleBars.onclick = () => {
  NavBaro.classList.toggle("active");
};

// ======================================================================
// login

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const ModelContent = document.getElementById("model-content");
const closeBtn = document.getElementById("closeBtn");

signUpButton.addEventListener("click", () => {
  ModelContent.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  ModelContent.classList.remove("right-panel-active");
});

// ========================================================================
// Show and hide login

document.addEventListener("DOMContentLoaded", function () {
  const model = document.getElementById("model-login");
  const loginButton = document.getElementById("icon-login");
  const closeBtn = document.getElementById("closeBtn");

  loginButton.addEventListener("click", () => {
    model.classList.toggle("show");
  });

  closeBtn.addEventListener("click", () => {
    model.classList.remove("show");
  });
});
// ======================================================================
// home slider

let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function prevSlide() {
  slideIndex = slideIndex === 0 ? slides.length - 1 : slideIndex - 1;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex = slideIndex === slides.length - 1 ? 0 : slideIndex + 1;
  showSlide(slideIndex);
}

showSlide(slideIndex);

// ======================================================================

// DATE COUNTER

document.addEventListener("DOMContentLoaded", function () {
  const countdownElement = document.getElementById("countdown");
  const daysElement = document.getElementById("days");
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

  const targetDate = new Date("2025-05-01T00:00:00").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Calculate days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    daysElement.textContent = formatTime(days);
    hoursElement.textContent = formatTime(hours);
    minutesElement.textContent = formatTime(minutes);
    secondsElement.textContent = formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  // Initial call to update countdown
  updateCountdown();

  // Update countdown every second
  setInterval(updateCountdown, 1000);
});
