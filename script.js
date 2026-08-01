const targetDate = new Date("2026-08-14T21:30:00");

const countdown = document.getElementById("countdown");

function updateCountdown() {

    const now = new Date();

    const diff = targetDate - now;

    if (diff <= 0) {
        countdown.innerHTML = "❤️ Ya puedes abrir tu regalo ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdown.innerHTML =
        `${days} días<br>
        <span style="font-size:22px;">
        ${hours}h ${minutes}m ${seconds}s
        </span>`;
}

updateCountdown();

setInterval(updateCountdown, 1000);
