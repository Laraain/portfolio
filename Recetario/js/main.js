
document.addEventListener("DOMContentLoaded", () => {
    const currentPage = document.body.getAttribute("data-page") || document.body.getAttribute("data-type");
    console.log(`Estás visitando la página: ${currentPage}`);
});


function verificarEdad() {
    const contenido = document.getElementById("contenidoPagina");
    let clave = prompt("⚠️ Esta sección es solo para mayores de edad. Ingrese la clave para continuar:");

    if (clave) clave = clave.trim().toLowerCase();

    if (clave === "mayor18") {
    alert(" Acceso permitido. ¡Disfrutá las recetas!");
    // mostrar 
    contenido.classList.remove("oculto");
    contenido.classList.add("visible");
    } else {
    alert(" Acceso denegado. Serás redirigido al inicio.");
    window.location.href = "index.html";
    }
}



window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const btn = document.getElementById("btnSubir");
  if (!btn) return; // si no existe el botón, no hace nada
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
    } else {
    btn.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnSubir");
    if (btn) {
    btn.addEventListener("click", () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });
    }
});

// Modo Oscuro
document.addEventListener("DOMContentLoaded", () => {
    const btnModo = document.getElementById("modoOscuro");
    if (btnModo) {
    btnModo.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
        btnModo.textContent = "☀️";
        } else {
        btnModo.textContent = "🌙";
        }

        console.log("🌓 Estado del modo oscuro:", document.body.classList.contains("dark-mode"));
    });
    }
});
