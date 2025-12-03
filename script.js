// Archivo: script.js

// Cambio de tema claro/oscuro al hacer clic en el botón
const btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', () => {
  document.documentElement.classList.toggle('tema-oscuro');
  // Cambiar ícono según el tema
  if (document.documentElement.classList.contains('tema-oscuro')) {
    localStorage.setItem('tema', 'oscuro'); // Guardar preferencia
    btnTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    localStorage.setItem('tema', 'claro');
    btnTema.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

// Aplicar tema guardado al cargar la página
if (localStorage.getItem('tema') === 'oscuro') {
  document.documentElement.classList.add('tema-oscuro');
  btnTema.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

// Validación simple del formulario de contacto
const form = document.getElementById('form-contacto');
form.addEventListener('submit', function(e) {
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor completa todos los campos.');
    e.preventDefault(); // Detener envío si hay campos vacíos
  } else {
    // Ejemplo de validación adicional (por ej. formato de email) se puede agregar aquí
    alert('Formulario enviado (simulado).');
    form.reset();
    e.preventDefault(); // Quitar si se agrega procesamiento en el servidor
  }
});
