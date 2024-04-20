var swiper = new Swiper('.swiper-container', {
    // Opciones
    loop: true, // Habilita el bucle infinito
    pagination: {
        el: '.swiper-pagination', // Selector del contenedor de paginación
    },
    navigation: {
        nextEl: '.swiper-button-next', // Selector del botón de siguiente
        prevEl: '.swiper-button-prev', // Selector del botón de anterior
    },
});