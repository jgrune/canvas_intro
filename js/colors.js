let colors = ['grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

let swatches = document.getElementsByClassName('swatch');

for(let i=0; i < colors.length; i++){
  let swatch = document.createElement('div');
  swatch.className = 'swatch';
  swatch.style.backgroundColor = colors[i];
  swatch.addEventListener('click', setSwatch);
  document.getElementById('colors').appendChild(swatch);
}

function setColor(color){
  context.fillStyle = color;
  context.strokeStyle = color;
  let active = document.getElementsByClassName('active')[0]
  if(active){
    active.className = 'swatch'
  }
}

function setSwatch(e){
  // identify swatch
  let swatch = e.target;
  // set color
  setColor(swatch.style.backgroundColor);
  // give active class
  swatch.className += ' active';
}

setSwatch({target: document.getElementsByClassName('swatch')[0]})
