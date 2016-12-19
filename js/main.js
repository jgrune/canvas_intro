let canvas = document.getElementById('canvas');

// consider 3d canvas for stars
let context = canvas.getContext('2d');
context.fillStyle = "#fff"

let radius;
let dragging = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius * 2;

// this is new content
var motionTrailLength = 20;
var positions = [];


var xPos = -100;
var yPos = 170;

function storeLastPosition(xPos, yPos) {
  // push an item
  positions.push({
    x: xPos,
    y: yPos
  });

  //get rid of first item
  if (positions.length > motionTrailLength) {
    positions.shift();
  }
}

function update() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < positions.length; i++) {
    var ratio = (i + 1) / positions.length;

    context.beginPath();
    context.arc(positions[i].x, positions[i].y, 10, 0, 2 * Math.PI, true);
    context.fillStyle = "rgba(204, 102, 153, " + ratio + ")";
    context.fill();
  }

  context.beginPath();
  context.arc(xPos, yPos, 10, 0, 2 * Math.PI, true);
  context.fillStyle = "#FF6A6A";
  context.fill();

  storeLastPosition(xPos, yPos);

  // update position
  if (xPos > canvas.width) {
    xPos = -100;
  }
  xPos += 3;

  requestAnimationFrame(update);
}
update();
// ???????????

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
