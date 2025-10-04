<!DOCTYPE html>

<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lex - Informática y Tecnología</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #0d0d0d;
      color: #f2f2f2;
      margin: 0;
      padding: 0;
      text-align: center;
    }
    header {
      padding: 60px 20px;
      background: linear-gradient(135deg, #1e1e1e, #2a2a2a);
      animation: fadeInDown 1.5s ease;
    }
    header h1 {
      font-size: 3.2em;
      margin: 0;
      color: #00adee;
      animation: glow 2s ease-in-out infinite alternate;
    }
    header p {
      font-size: 1.2em;
      margin-top: 10px;
      opacity: 0.85;
    }
    section {
      padding: 60px 20px;
      max-width: 900px;
      margin: auto;
      animation: fadeIn 2s ease;
    }
    h2 {
      color: #00adee;
      margin-bottom: 20px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      margin: 12px 0;
      font-size: 1.1em;
      transition: transform 0.3s ease;
    }
    li:hover {
      transform: scale(1.05);
      color: #00adee;
    }
    a {
      color: #00adee;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    a:hover {
      color: #66d9ff;
    }
    .socials a {
      margin: 0 15px;
      font-weight: bold;
      font-size: 1.1em;
      transition: transform 0.3s ease;
    }
    .socials a:hover {
      transform: scale(1.1);
    }
    footer {
      padding: 20px;
      background: #1a1a1a;
      font-size: 0.9em;
      margin-top: 30px;
      opacity: 0.8;
    }
    /* Animaciones */
    @keyframes fadeIn {
      from {opacity: 0; transform: translateY(20px);}
      to {opacity: 1; transform: translateY(0);}
    }
    @keyframes fadeInDown {
      from {opacity: 0; transform: translateY(-30px);}
      to {opacity: 1; transform: translateY(0);}
    }
    @keyframes glow {
      from { text-shadow: 0 0 10px #00adee; }
      to { text-shadow: 0 0 25px #00adee, 0 0 40px #007a99; }
    }
  </style>
</head>
<body>
  <header>
    <h1>Lex</h1>
    <p>Servicios informáticos • Montaje y mantenimiento de PCs • Soluciones digitales</p>
  </header>

  <section>
    <h2>👨‍💻 Sobre mí</h2>
    <p>Hola, soy Lex 👋 Tengo 21 años y me dedico al mundo de la informática. 
    Ofrezco servicios de reparación, optimización y montaje de ordenadores. 
    También creo contenido digital y comparto mis proyectos en GitHub.</p>
  </section>

  <section>
    <h2>⚡ Servicios</h2>
    <ul>
      <li>🖥️ Montaje de PCs personalizados</li>
      <li>⚡ Optimización y limpieza de ordenadores</li>
      <li>🌐 Asesoría en informática y tecnología</li>
      <li>🎬 Creación de contenido digital sin cámara/voz</li>
    </ul>
  </section>

  <section>
    <h2>📩 Contacto</h2>
    <p>Puedes encontrarme en:</p>
    <div class="socials">
      <a href="mailto:contactol3x@gmail.com">📧 Email</a>
      <a href="https://github.com/L3xATM" target="_blank">💻 GitHub</a>
      <a href="https://ko-fi.com/l3x" target="_blank">☕ Ko-fi</a>
      <a href="https://discordapp.com/users/L3xssj" target="_blank">💬 Discord</a>
    </div>
  </section>

  <footer>
    © 2025 Lex | Barcelona
  </footer>
</body>
</html>
