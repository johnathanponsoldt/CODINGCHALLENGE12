// Get the canvas element
const canvas = document.getElementById('myCanvas');

// Get the 2D drawing context
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#4287f5';  // Set the fill color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // Draw a filled rectangle covering the entire canvas

ctx.fillStyle = '#45b500';
ctx.fillRect(50, 50, 150, 100);

// Rectangle outline
ctx.strokeStyle = '#b50030';
ctx.lineWidth = 5;
ctx.strokeRect(250, 50, 150, 100);

ctx.beginPath();
ctx.arc(150, 300, 50, 0, 2 * Math.PI);  // Draw a full circle
ctx.fillStyle = '#a000b5';
ctx.fill();  // Fill the circle
