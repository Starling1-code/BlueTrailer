document.getElementById('listaMovie').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'flex';
  });
  
  document.querySelector('.close_button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal')) {
      document.getElementById('modal').style.display = 'none';
    }
  });
  
  // LÓGICA PARA EL MODAL DEL TRAILER

  document.getElementById('openTrailer').addEventListener('click', function() {
    document.getElementById('modal_trailer').style.display = 'flex';
    document.getElementById('modal').style.display = 'none';
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal_trailer')) {
      document.getElementById('modal_trailer').style.display = 'none';
    }
  });