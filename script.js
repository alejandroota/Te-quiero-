const fechaSorpresa = new Date("2026-08-14T20:30:00").getTime();

const surprise = document.getElementById("surprise");
const surpriseButton = document.getElementById("surpriseButton");
const letter = document.getElementById("letter");

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
});
