# Radio Conexión

Sitio estático en español, compatible con GitHub Pages y Vercel. La portada está en `index.html`; `inicio.html` conserva el acceso anterior. Las páginas utilizan enlaces relativos con extensión `.html` para funcionar también sin reglas de reescritura.

## Contenido

- Inicio: presentación, accesos a episodios y comunidad, suscripción y WhatsApp.
- Episodios: reproductor de Spotify.
- Noticias: titulares obtenidos de las fuentes configuradas.
- Suscriptores: acceso, solicitudes de canciones, mensajes y fonoteca.
- Historia: información de la radio y su fundador.

Los ajustes visuales compartidos están en `site.css`; las mejoras de accesibilidad están en `site.js`. No se necesita compilar ni instalar dependencias para publicar estos archivos.

## Servicios externos

El formulario y el espacio de suscriptores conservan el servicio de Google Apps Script original. Spotify, las fuentes de noticias y las imágenes remotas necesitan conexión a Internet. Las comprobaciones locales no envían suscripciones, mensajes ni solicitudes de canciones reales.

El acceso existente del portal usa almacenamiento del navegador. La autorización de datos privados debe aplicarse en el servicio externo; ocultar contenido en la página no constituye un control de acceso.

## Cambios de esta revisión

Portada renovada con los colores de la marca, accesos directos, ajustes para móviles y modo oscuro, navegación con teclado, etiquetas accesibles, portada raíz y mensajes de suscripción que no anuncian éxito ante una respuesta desconocida. Se eliminó la encuesta, el envío de votos y sus referencias al cerrar sesión. Se retiró la dependencia de animaciones AOS para que el contenido permanezca visible si falla un servicio externo.
