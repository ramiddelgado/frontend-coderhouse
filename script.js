
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar) {          //! Abrir navbar
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {        //! Cerrar navbar
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


