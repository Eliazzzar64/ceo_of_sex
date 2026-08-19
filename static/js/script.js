document.addEventListener("DOMContentLoaded", () => {
    
    // Obtener elementos
    const searchButton = document.getElementById("btn-hero-search");
    const loginBtn = document.querySelector(".btn-login");

    // Evento botón Buscar Profesor
    if (searchButton) {
        searchButton.addEventListener("click", () => {
            alert("Redirigiendo a la pantalla de búsqueda de profesores...");
        });
    }

    // Evento botón Login
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            alert("Abriendo modal de inicio de sesión...");
        });
    }

    // Evento para desplegar la información de las clases
    const classCards = document.querySelectorAll(".class-card");

    classCards.forEach(card => {
        card.addEventListener("click", () => {
            // Opcional: Si quieres que al abrir una, se cierren las demás automáticamente
            classCards.forEach(c => {
                if (c !== card) {
                    c.classList.remove("active");
                }
            });
            
            // Alterna la clase 'active' en la tarjeta presionada
            card.classList.toggle("active");
        });
    });
});