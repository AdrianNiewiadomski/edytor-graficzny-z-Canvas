// jshint esversion:6

function resizeCanvas(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    ctx.fillRect(50, 100, 20, 300);
});

