
// CAMBIAR DE ESCENA
function cambiarEscena(actual, siguiente) {
    document.getElementById(actual).classList.remove("activa");

    setTimeout(() => {
        document.getElementById(siguiente).classList.add("activa");
    }, 500);
}

// PARTÍCULAS DEL FONDO
const particles = document.getElementById("particles");

function crearParticulas() {
    const simbolos = ["♥", "♡", "✦", "✨"];

    for (let i = 0; i < 30; i++) {
        const particula = document.createElement("span");

        particula.className = "particle";
        particula.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        particula.style.left = Math.random() * 100 + "%";
        particula.style.fontSize = (10 + Math.random() * 18) + "px";
        particula.style.animationDuration = (5 + Math.random() * 8) + "s";
        particula.style.animationDelay = (Math.random() * 8) + "s";

        particles.appendChild(particula);
    }
}

crearParticulas();

// PRIMERA ESCENA
function comenzar() {
    cambiarEscena("inicio", "defectos");

    setTimeout(() => {
        mostrarCorazones();
    }, 1800);
}

// MENSAJES EN LOS CORAZONES
function mostrarCorazones() {
    const contenedor = document.getElementById("corazones");

    const mensajes = [
        "Te amo ❤️",
        "Te adoro 💗",
        "Me encantas 💕",
        "Me fascinas 💜",
        "Te elijo 💖",
        "Eres especial ✨",
        "Me haces feliz 💞",
        "Mi niña hermosa 💗"
    ];

    mensajes.forEach((mensaje, indice) => {
        setTimeout(() => {
            const corazon = document.createElement("div");

            corazon.className = "corazon-mensaje";
            corazon.textContent = mensaje;

            contenedor.appendChild(corazon);
        }, indice * 700);
    });

    // Pasar a la siguiente escena
    setTimeout(() => {
        cambiarEscena("defectos", "promesa");
    }, 11000);
}

// ESCENA FINAL
function finalizar() {
    cambiarEscena("promesa", "final");
}
