window.addEventListener('load', function() {
    var overlay = document.querySelector('.overlay');
  
    function hideOverlay() {
      overlay.style.display = 'none';
    }
  
    // Simulez un délai de chargement ici (par exemple, 4 secondes)
    setTimeout(hideOverlay, 4500);
  });
  