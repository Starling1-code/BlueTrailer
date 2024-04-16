document.getElementById('abrir_modal').addEventListener('click', function() {
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
  