// КОНВЕРТ

const envelope = document.getElementById("envelope");
const overlay = document.getElementById("inviteOverlay");

envelope.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 1500);
});


// COUNTDOWN

const weddingDate =
  new Date("2026-10-26T18:00:00+06:00").getTime();

function updateCountdown() {

  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (distance / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (distance / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (distance / 1000) % 60
  );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


// ПОЯВЛЕНИЕ СЕКЦИЙ

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }

    });

  },
  {
    threshold: 0.15
  }
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => {
    observer.observe(element);
  });
