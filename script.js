const fechaSorpresa = new Date("2026-08-14T12:00:00").getTime();

const surprise = document.getElementById("surprise");
const surpriseButton = document.getElementById("surpriseButton");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

function comprobarFecha() {
    const ahora = new Date().getTime();

    if (ahora >= fechaSorpresa) {
        surprise.style.display = "block";
    } else {
        surprise.style.display = "none";
    }
}

comprobarFecha();

setInterval(comprobarFecha, 1000);

surpriseButton.addEventListener("click", function () {
    surpriseButton.style.display = "none";
    letter.style.display = "block";

    music.play();
});
