function mostrarError(id, mensaje) {
  document.getElementById(id).textContent = mensaje;
}

function limpiarErrores() {
  mostrarError('error-email', '');
  mostrarError('error-contraseña', '');
  mostrarError('error-telefono', '');
  document.getElementById('alerta-general').classList.add('oculto');
}

/*----------------------------------------------------------------------*/
function validarEmail(email) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    mostrarError("error-email", "Escribe un email válido.");
    return false;
  }
  return true;
}

/*----------------------------------------------------------------------*/
function validarContraseña(contraseña) {
  let tieneLetra = /[A-Za-z]/.test(contraseña);
  let tieneNumero = /[0-9]/.test(contraseña);
  let tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(contraseña);
  let longitudValida = contraseña.length >= 8;

  if (!(longitudValida && tieneLetra && tieneNumero && tieneEspecial)) {
    mostrarError("error-contraseña", "La contraseña debe contener letras, números y simbolos.");
    return false;
  }
  return true;
}

/*----------------------------------------------------------------------*/
function validarTelefono(telefono) {
  let regex = /^[0-9]{10}$/;

  if (!regex.test(telefono)) {
    mostrarError("error-telefono", "Escribe un teléfono válido (10 dígitos).");
    return false;
  }
  return true;
}

/*----------------------------------------------------------------------*/
function validarFormulario(email, contraseña, telefono) {
  limpiarErrores();
  let emailValido = validarEmail(email);
  let passValida = validarContraseña(contraseña);
  let telValido = validarTelefono(telefono);

  if (!emailValido || !passValida || !telValido) {
    document.getElementById("alerta-general").classList.remove("oculto");
  } else {
    alert("✅ Todos los datos son válidos.");
  }
}
