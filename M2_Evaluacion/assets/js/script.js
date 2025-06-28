// script.js

// Validación del formulario de contacto
(function() {
  'use strict';
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    // Evitar envío si no es válido
    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
      form.classList.add('was-validated');
    }
  }, false);
})();

// Lógica del Test de Seguridad dentro del modal
document.getElementById('testForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let score = 0;
  // Pregunta 1
  if (document.getElementById('q1').value === 'correcta') score++;
  // … añade más preguntas aquí …
  const result = document.getElementById('testResult');
  result.innerHTML = `<div class="alert alert-info">
    Obtuviste ${score} de 1 preguntas correctas.
  </div>`;
});
