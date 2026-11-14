---
layout: post
title: "Cómo construí este blog: Jekyll, tres idiomas y búsqueda sin servidor"
date: 2026-11-13 12:00:00 +0300
lang: es
---

*Otros idiomas: [Русский]({{ site.baseurl }}/2026/11/13/how-i-built-this-blog-ru.html) · [English]({{ site.baseurl }}/2026/11/13/how-i-built-this-blog.html)*

Quería un blog en tres idiomas — sin WordPress, sin base de datos y sin factura mensual de hosting. Así funciona por dentro: el generador estático Jekyll, traducciones de interfaz en un solo archivo YAML y búsqueda de entradas que corre entera en el navegador.

<!--more-->

## Por qué estático

Un sitio típico en WordPress es un servidor que reconstruye cada página en cada visita: un script consulta la base de datos, pega el HTML y lo sirve. Un blog estático funciona distinto: **todas las páginas se construyen una vez** (al publicar), y el lector recibe archivos listos. Ventajas:

- hosting gratis (GitHub Pages), y no hay nada que hackear — ni base de datos ni código de servidor;
- velocidad: solo se sirven archivos, físicamente imposible ir más rápido;
- los textos viven en git — se conserva el historial completo de cambios de cada entrada.

Todo esto lo construye **Jekyll**, un generador de sitios estáticos en Ruby — el mismo que impulsa GitHub Pages.

## La cadena: cómo un .md se convierte en .html

El malentendido más común: «pensé que eran archivos md, pero el enlace apunta a html». ¡Ambas cosas son ciertas! Tú escribes **Markdown**; Jekyll produce **HTML** al compilar:

```
_posts/2026-11-13-hola-mundo.md     ← tú escribes esto
        ↓  jekyll build
_site/2026/11/13/hola-mundo.html    ← el lector recibe esto
```

Dentro de cada `.md` hay una cabecera («front matter») entre dos líneas `---`:

```yaml
---
layout: post
title: "¡Hola, mundo!"
lang: es
---
```

Después — Markdown normal. Jekyll lo pasa por un conversor (kramdown), lo envuelve en un layout y deja el resultado en `_site/` en carpetas por fecha. Nunca escribes HTML a mano — solo Markdown y, de vez en cuando, un poco de Liquid.

## Tres idiomas, cero plugins

No hizo falta ningún plugin externo para el multilingüismo. El esquema:

1. **Cada página y entrada conoce su idioma** — el campo `lang` en el front matter. Para los despistados, `_config.yml` tiene valores por defecto: todo en `_posts/` cuenta como inglés salvo indicación contraria.
2. **Las traducciones de interfaz viven en un archivo**, `_data/i18n.yml`:

```yaml
ru:
  about: "обо мне"
  recent_posts: "НОВЫЕ ЗАПИСИ"
es:
  about: "sobre mí"
```

3. **Las plantillas leen traducciones según el idioma actual**: `{% assign t = site.data.i18n[lang] %}` → `{{ t.about }}`.
4. **Cada portada muestra solo sus entradas**: `{% assign lang_posts = site.posts | where: "lang", lang %}`. Una entrada en ruso nunca se ahoga en la portada inglesa — simplemente no entra en ella.
5. El selector **en / ru / es** de la cabecera son solo tres enlaces a `/`, `/ru/` y `/es/` con el activo resaltado.

Una entrada en tres idiomas son tres archivos: `slug.md` (EN), `slug-ru.md`, `slug-es.md`. Me dio pereza hacerlo a mano, así que el script `new-post.sh "Título" all` crea las tres plantillas de golpe.

## Búsqueda sin servidor

En un sitio estático no hay dónde «consultar una base de datos» — y no hace falta. El esquema, en cuatro pasos:

1. Al compilar, Jekyll genera **`/search.json`** — un archivo con todas las entradas (título, URL, idioma, texto completo). Una plantilla Liquid, cero código de servidor.
2. En la cabecera — un botón de lupa (y **Ctrl+K** de regalo).
3. Al pulsar Enter, JavaScript **descarga `search.json` una sola vez** y busca en el navegador: primero coincidencias por título, abajo — por texto completo con la palabra resaltada.
4. La ventana es modal, centrada, con fondo oscurecido. Todo se siente 2026 — excepto el peso de la página: no gana ni un byte hasta que abres la búsqueda.

## Estructura del proyecto

| Ruta | Qué hay |
|---|---|
| `_posts/` | entradas (Markdown) |
| `_layouts/` | esqueletos de página: default → home / post / page |
| `_includes/` | piezas: cabecera, pie, búsqueda, figuras |
| `_data/i18n.yml` | traducciones de interfaz |
| `_sass/` | estilos (Sass → un CSS) |
| `search.json` | índice de búsqueda |
| `ru/`, `es/` | portadas y about de otros idiomas |
| `.github/workflows/` | auto-build y despliegue a GitHub Pages |

## Despliegue

Push a GitHub → Actions construye el sitio con el mismo Jekyll y lo publica en GitHub Pages. De «guardé el archivo» a «visible en internet» — unos dos minutos.

## El resultado

Todo el blog es una carpeta de archivos de texto: Markdown, YAML, un poco de Liquid y JavaScript. Sin panel de administración, sin base de datos, cero rublos de hosting. ¿Quieres uno igual? Todo el código está abierto en [el repositorio de este blog](https://github.com/Tim4087/Tim4087.github.io). Clona y cambia el nombre.
