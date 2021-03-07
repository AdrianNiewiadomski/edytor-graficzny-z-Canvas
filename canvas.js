// jshint esversion:8

function resizeCanvas(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}

function drawFullRectangle(ctx, topLeftCornerX, topLeftCornerY, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(topLeftCornerX, topLeftCornerY, width, height);
    ctx.fillStyle = 'black';
}

function drawEmptyRectangle(ctx, topLeftCornerX, topLeftCornerY, width, height, lineWidth, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.strokeRect(topLeftCornerX, topLeftCornerY, width, height);
    ctx.strokeStyle = 'black';
}

window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    drawFullRectangle(ctx, 100, 50, 60, 60, 'blue');
    drawFullRectangle(ctx, 160, 50, 240, 10, '#f00');
    drawFullRectangle(ctx, 160, 70, 240, 10, '#ff0000');
    drawFullRectangle(ctx, 160, 90, 240, 10, 'rgb(255, 0, 0)');

    drawEmptyRectangle(ctx, 100, 50, 300, 60, 1, 'rgba(0, 0, 0, 1)');

    //draw line
    ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(300, 200);
    ctx.lineTo(300, 300);
    ctx.closePath();
    ctx.stroke();
});

