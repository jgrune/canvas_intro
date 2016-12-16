let canvas = document.getElementById('canvas');

// consider 3d canvas for stars
let context = canvas.getContext('2d');
context.fillStyle = "#fff"

let radius;
let dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius * 2;

function putPoint(e) {
  if(dragging){
    context.lineTo(e.clientX, e.clientY)
    context.stroke();
    context.beginPath();
    // console.log(e)
    // context.arc(x, y, radius, start, end);
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }
}

function engage(e) {
  dragging = true;
  putPoint(e);
}

function disengage() {
  dragging = false;
  context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mouseup', disengage);
canvas.addEventListener('mousemove', putPoint);
