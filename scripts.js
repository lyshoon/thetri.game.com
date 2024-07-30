document.addEventListener('DOMContentLoaded', () => {
    const player = document.querySelector('.player img');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (scrollY > 100) {
            player.style.animationPlayState = 'running';
        } else {
            player.style.animationPlayState = 'paused';
        }
    });
});
