document.addEventListener('DOMContentLoaded', function() {
  // Manejador para el botón de búsqueda
  const searchButton = document.getElementById('searchButton');
  const searchModal = document.getElementById('searchModal');
  const searchInput = document.getElementById('searchInput');

  if (searchButton) {
      searchButton.addEventListener('click', function(e) {
          e.preventDefault(); // Prevenir navegación
          $('#searchModal').modal('show');
          // Focus en el input cuando el modal está completamente visible
          $('#searchModal').on('shown.bs.modal', function () {
              searchInput.focus();
          });
      });
  }

  // Cerrar modal con ESC
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && $('#searchModal').is(':visible')) {
          $('#searchModal').modal('hide');
      }
  });
});