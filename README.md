Librería de Validaciones

Descripción

Esta es una pequeña librería en JavaScript diseñada para validar campos de un formulario de inicio de sesión de forma visual e intuitiva. Se enfoca en tres campos principales:

Correo electrónico

Contraseña

Teléfono

Funcionalidades:
  Validación personalizada:

  Correo electrónico con formato estándar (usuario@dominio.com).
  
  Contraseña con:
  
  Mínimo 8 caracteres.
  
  Al menos una letra, un número y un carácter especial.
  
  Teléfono con exactamente 10 dígitos numéricos.
  
  Mensajes de error visuales:
  
  Cada campo muestra un mensaje de error específico debajo si la validación falla.
  
  También muestra una alerta general si uno o más campos están incorrectos.


Instalación

Descargar el archivo comprimido .zip
![image](https://github.com/user-attachments/assets/7ed7f40e-12fb-4f30-8bbf-b6c520dfd9f4)

Una vez finalizada la descarga realizamos la extraccion del archivo js
![image](https://github.com/user-attachments/assets/0641a77c-6065-47b1-994c-682d8282a698)
![image](https://github.com/user-attachments/assets/9462994b-4cf4-4de3-a0b1-a4f656612b5e)


El archivo lo agregamos al proyecto en el cual lo implementaremos.

![image](https://github.com/user-attachments/assets/1377231c-3a4c-48c1-975b-60cdb6fbc9a8)


Lo incluimos a nuestro proyecto con la linea   <script src="validaciones.js"></script>


Ejemplo de implementación en el proyecto

HTML

    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Validación Visual</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
      <link rel="stylesheet" href="css/estilos.css">
    </head>
    <body>
      <div class="contenedor">
        <h2>Bienvenido, entra a tu cuenta.</h2>
    
        <div id="alerta-general" class="alerta oculto">
          Ingresa tus datos correctamente.
        </div>
    
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" placeholder="Ingresa tu correo">
        <small id="error-email" class="error"></small>
    
        <label for="contraseña">Contraseña</label>
        <input type="password" id="contraseña" placeholder="Ingresa tu contraseña">
        <small id="error-contraseña" class="error"></small>
    
        <label for="telefono">Teléfono</label>
        <input type="text" id="telefono" placeholder="Ingresa tu teléfono (10 dígitos)">
        <small id="error-telefono" class="error"></small>
    
        <button class="btn" onclick="validarFormulario(
            document.getElementById('email').value,
            document.getElementById('contraseña').value,
            document.getElementById('telefono').value
          )">AUTENTICAR <i class="fas fa-sign-in-alt"></i></button>
    
      </div>
    
      <script src="js/validaciones.js"></script>
    </body>
    </html>
    
Estilos utilizados en esta implementación

CSS
    
    body {
      font-family: Arial, sans-serif;
      background-color: #001b73;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
    .contenedor {
      background: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      width: 320px;
    }
    
    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
      color: #333;
    }
    
    input {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    
    small.error {
      color: #d9534f;
      font-size: 13px;
      display: block;
      margin-top: 4px;
    }
    
    .alerta {
      background-color: #f8d7da;
      color: #721c24;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 15px;
      font-weight: bold;
      font-size: 14px;
    }
    
    .oculto {
      display: none;
    }
    
    .btn {
      background-color: #009688;
      color: white;
      width: 100%;
      padding: 12px;
      margin-top: 20px;
      border: none;
      border-radius: 5px;
      font-size: 15px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    .btn:hover {
      background-color: #00796b;
    }
    .ventana-flotante {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #ffc;
      border: 1px solid #cc0;
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      z-index: 1000;
      font-size: 14px;
      max-width: 250px;
    }
    
    .oculto {
      display: none;
    }
