// script.js

// script.js

// 1) ELIMINAR ELEMENTOS (versión corregida)
// Objetivo: mostrar mensaje de “Usuario Eliminado…” y cambiar el avatar
const removeBtn = document.getElementById('btnRemove');
removeBtn.addEventListener('click', () => {
  // 1.1 Localizamos la imagen de avatar
  const avatarImg = document.querySelector('.avatar img');
  // 1.2 Cambiamos su fuente al icono 'user.png'
  avatarImg.src = 'img/user.png';

  // 1.3 Localizamos el elemento de biografía
  const bioEl = document.getElementById('bio');
  // 1.4 Sustituimos el texto por el mensaje de eliminación
  bioEl.innerText = 'Usuario Eliminado a Patricio no le gusto el trabajo';

  // (Opcional) Desactivar más interacciones tras “eliminar”
  removeBtn.disabled = true;

});


// 2) EDITAR TEXTO DEL HTML
// Objetivo: actualizar la biografía sin recargar la página
const editBtn = document.getElementById('btnEdit');
editBtn.addEventListener('click', () => {
  const bioElement = document.getElementById('bio');
  // Abrir un prompt para que el usuario ingrese un nuevo texto
  const nuevoTexto = prompt('Ingresa tu nueva biografía:', bioElement.innerText);
  if (nuevoTexto !== null) {
    // Actualizamos el contenido del elemento <p id="bio">
    bioElement.innerText = nuevoTexto;
  }
});

// 3) AUMENTAR CONTADOR DE CONEXIONES
// Objetivo: incrementar en tiempo real el número de conexiones
const connBtn = document.getElementById('btnConn');
connBtn.addEventListener('click', () => {
  const span = document.getElementById('connCount');
  let count = parseInt(span.innerText, 10);
  count++;
  // Refrescar el texto del contador con el nuevo valor
  span.innerText = count;
});

// 4) DISMINUIR CONTADOR DE SOLICITUDES
// Objetivo: después de aceptar o rechazar, reducir el número de solicitudes pendientes
const reqBtn = document.getElementById('btnReq');
reqBtn.addEventListener('click', () => {
  const span = document.getElementById('reqCount');
  let count = parseInt(span.innerText, 10);
  if (count > 0) {
    count--;
    // Actualizar el contador en pantalla
    span.innerText = count;
  }
});
