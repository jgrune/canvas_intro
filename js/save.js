let saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveImage);

function saveImage(){
  let data = canvas.toDataURL();

  let request = new XMLHttpRequest();

  request.onreadystatechange = function(){
    if(request.readyState == 4 && request.status == 200){
      // do our stuff
      var response = request.responseText;
      document.location(response, '_blank', 'location=0, menubar=0')   
   }
  }

  request.open('POST', 'save.php', true);
  request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  request.send('img=' + data);

  // window.open(url, name, options)
  // window.open(data, '_blank', 'location=0, menubar=0')
}
