const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Rectángulo
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 150, 100);

// Triángulo
ctx.beginPath();
ctx.moveTo(300, 100);
ctx.lineTo(250, 200);
ctx.lineTo(350, 200);
ctx.closePath();
ctx.fillStyle = 'red';
ctx.fill();

// Pluma (dibujo libre)
ctx.beginPath();
ctx.moveTo(400, 50);
ctx.lineTo(420, 80);
ctx.lineTo(380, 120);
ctx.lineTo(430, 150);
ctx.lineTo(400, 200);
ctx.strokeStyle = 'green';
ctx.lineWidth = 2;
ctx.stroke();

// Línea
ctx.beginPath();
ctx.moveTo(100, 300);
ctx.lineTo(500, 300);
ctx.strokeStyle = 'purple';
ctx.lineWidth = 4;
ctx.stroke();

// Arco
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2, false); // Círculo
ctx.fillStyle = 'yellow';
ctx.fill();

// Curva Bézier
ctx.beginPath();
ctx.moveTo(300, 300);
ctx.bezierCurveTo(400, 200, 500, 400, 400, 300);
ctx.strokeStyle = 'orange';
ctx.lineWidth = 2;
ctx.stroke();

// Curva Cuadrática
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.quadraticCurveTo(300, 100, 400, 200);
ctx.strokeStyle = 'pink';
ctx.lineWidth = 2;
ctx.stroke();

// Combinación de líneas y figuras
ctx.beginPath();
ctx.moveTo(500, 50);
ctx.lineTo(550, 100);
ctx.arcTo(570, 50, 600, 100, 20);
ctx.closePath();
ctx.fillStyle = 'lightblue';
ctx.fill();
ctx.strokeStyle = 'black';
ctx.lineWidth = 1;
ctx.stroke();
