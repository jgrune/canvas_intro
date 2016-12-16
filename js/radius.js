function setRadius(newRadius) {
  if(newRadius<minRad)
    newRadius = minRad;
  else if(newRadius>maxRad)
    newRadius = maxRad;
  radius = newRadius;
  context.lineWidth = radius * 2;

  radSpan.innerHTML = radius
}

let minRad = 5,
    maxRad = 100,
    defaultRad = 10,
    interval = 5,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');

decRad.addEventListener('click', () => {
  setRadius(radius - interval)
})

incRad.addEventListener('click', () => {
  setRadius(radius + interval)
})

setRadius(defaultRad);
