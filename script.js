let mouse_effect = document.getElementById('mouse-effect');
let movies_movies = document.getElementById("movies-movies")
let faq_q = document.querySelectorAll('.faq-q');

document.addEventListener('mousemove', (e) => {
    setTimeout(() => {
        let x = e.clientX;
        let y = e.clientY;

        mouse_effect.style.left = `${x}px`;
        mouse_effect.style.top = `${y}px`;
    }, 150);
});

faq_q.forEach((q) => {
    q.addEventListener('click', () => {
        q.parentElement.classList.toggle("active");
    });
});