# Bekis Vegetales Gourmet — V2.2 editorial

Versión basada en **V2.1 Fondo Panorámico**, conservando el hero, los contactos y el recetario profesional.

## Abrir
1. Abrir la carpeta `bekis_webp` en Visual Studio Code.
2. Abrir `index.html` con Live Server.
3. Comprobar escritorio y móvil con el modo de dispositivo de Chrome.

## Cambios de la V2.2
- **Nuestros Productos**: panel introductorio con tres símbolos de hojas, corazón y sello; tres fichas verticales separadas por líneas; sin tarjetas grandes.
- **Ideas para disfrutar**: tres columnas (fotografía, CTA, mensaje). Clic en **VER RECETAS** para expandir el listado; clic en cada preparación abre los ingredientes y pasos completos en ventana.
- **Nuestra Historia**: tres columnas (texto, foto del cultivo, valores) sin botón adicional.
- La portada panorámica y el botón flotante de WhatsApp continúan funcionando.

## Dónde editar
- `index.html`: contenido editorial, nombres de productos, textos, iconos SVG y fotografías.
- `styles.css`: busca `BEKIS V2.2 — AJUSTES EDITORIALES DE PORTADA` para colores, tamaños y distribución de las secciones.
- `script.js`: el arreglo `recipes` controla ingredientes, gramos y pasos; `CONFIG.whatsapp` controla el enlace flotante.
- `public/assets/inspiracion-gourmet.webp` y `cultivo-zucchini.webp`: recortes de la **imagen de referencia enviada por el cliente**, solo para prototipo. Reemplazar por imágenes originales/licenciadas antes del lanzamiento.
- `public/assets/tropical.webp`, `picante.webp` y `tradicional.webp`: fotografías referenciales de los tres sabores, reemplazables manteniendo el nombre.

## Validación comercial imprescindible
La referencia visual incluye los textos **«100% Natural», «Sin conservantes», «Hecho en Ecuador»** y mensajes sobre selección y producción local. Son textos **pendientes de verificación** con la formulación y prácticas reales de Bekis. No publicar afirmaciones sin sustento. Los gramajes comerciales también deben comprobarse (en las propuestas previas hay cifras contradictorias). Esta V2.2 omite pesos comerciales no confirmados.

## Publicación
El sitio sigue siendo estático (HTML/CSS/JS). No requiere npm. Se puede desplegar en Cloudflare Pages como sitio estático. Asegúrate de subir como directorio raíz el contenido de `bekis_webp`, con `index.html` al inicio.
