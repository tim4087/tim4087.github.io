---
layout: post
title: "Hackearon al mayor gestor de contraseñas: qué robaron a 1Password — y qué no pudieron"
date: 2026-11-26 18:40:00 +0300
lang: es
---

*Otros idiomas: [Русский]({{ site.baseurl }}/2026/11/26/1password-breach-ru.html) · [English]({{ site.baseurl }}/2026/11/26/1password-breach.html)*

El 25 de noviembre, 1Password — uno de los mayores gestores de contraseñas del mundo — publicó una confesión: **un atacante entró en sus sistemas internos**. Para un servicio cuyo producto es «guardar secretos de forma fiable», es una noticia del nivel de «apareció un virus en un hospital». Análisis desde la fuente primaria (el blog de la empresa): qué pasó, qué robaron de verdad, por qué sobrevivieron los almacenes — y qué pinta aquí Denuvo.

<!--more-->

## Qué pasó

**El 19 de noviembre**, 1Password empezó a investigar: un atacante obtuvo acceso a la **cuenta corporativa de GitHub de un empleado**. Después, la cadena de escalada clásica:

1. a través de la cuenta — **acceso al código fuente** de repositorios privados;
2. **inyección de código malicioso en los servicios de backend**;
3. el código malicioso **descargó datos administrativos de clientes**;
4. de propina — acceso al **sistema CI/CD** (herramientas de build y despliegue, donde viven secretos de infraestructura).

## Qué robaron (y qué significa)

Según la lista de la empresa, a **una parte de los usuarios**:

- **nombres y correos electrónicos**;
- identificadores de cuenta y usuario, **fechas de creación y último acceso**;
- claves públicas (públicas por diseño — sin amenaza);
- parámetros del protocolo SRP (inútiles para acceder por sí solos);
- **tokens de enlaces por correo**: invitaciones, aprovisionamiento, recuperación de cuenta;
- metadatos internos (identificadores de versiones, archivos y similares).

## Qué NO robaron — y por qué es lo principal

- **los almacenes y su contenido** — no;
- **las claves que cifran los almacenes** — no;
- contraseñas maestras y Secret Key — no (1Password **no las guarda** — arquitectura zero-knowledge);
- claves de recuperación, apps y extensiones — intactas.

Aquí el diseño venció al incidente: incluso **un atacante dentro de los servidores** no puede leer los almacenes, porque 1Password no los tiene en forma legible. Es exactamente la arquitectura que defiendo en cada [análisis]({{ site.baseurl }}/2026/11/14/kim-treasure-lazarus-es.html): no «confía en nosotros», sino «no hay nada que robar, porque los datos no existen».

## Pero hay trampa: tokens + correo = phishing

El punto más infravalorado son los tokens de enlaces. La empresa explica con honestidad: el token **por sí solo** no abre una cuenta — hace falta además un inicio SSO o un código al correo. Pero la combinación de «correos robados + saber qué usuarios están en plena invitación/recuperación» es una **lista de objetivos lista para phishing dirigido**. 1Password reaccionó bien: códigos alargados de 6 dígitos a **10 caracteres** (el brute force pasa a ser prácticamente imposible) más aviso directo sobre correos falsificados.

O sea: la amenaza real para los usuarios no es «rompieron la caja fuerte» — es la **llamada del falso banco**: espera correos sobre 1Password que no pediste.

## Una firma conocida

Fíjate en el vector: **una cuenta corporativa de un desarrollador** → código fuente → código malicioso en producción. Es la misma debilidad de cadena de suministro que en el caso Bybit (un empleado de Safe{Wallet} infectado en una «entrevista») y Telegram (cuentas de GitHub comprometidas por phishing). La industria re-aprendió: **el perímetro de seguridad pasa por el portátil de cada contratista y el token de cada repositorio**.

Por cierto, sobre portátiles ajenos: según Lenta, el hacker detrás es **voices38** — el mismo que el 23 de noviembre rompió **Denuvo** en Phantom Blade Zero de S-GAME Studio. La protección aguantó unas tres semanas. El Denuvo de los videojuegos y un GitHub corporativo son universos narrativos distintos — pero la firma es una sola: un profesional paciente contra lo «irrompible».

## Qué hacer tú

1. **No hay nada que actualizar** — los almacenes están a salvo, los servicios funcionan.
2. **Cuidado con correos sobre 1Password**: invitaciones, recuperación, «verificación urgente» — solo si los iniciaste tú. 1Password jamás pedirá tu contraseña o Secret Key por correo.
3. Introduce secretos **solo en la app oficial** o en una dirección tecleada a mano.
4. La lección general de la semana (y del mes): un gestor de contraseñas debe ser zero-knowledge. Si el tuyo es «lo guardamos todo en un servidor y promemos cuidarlo» — no tienes un gestor de contraseñas; tienes la caja fuerte de otro con tus cosas dentro.

*Fuentes: [blog de 1Password](https://1password.com/blog/update-on-nov-2026-security-incident) (fuente primaria, 25.11.2026), [Lenta.ru](https://lenta.ru/news/2026/11/26/krupneyshiy-menedzher-paroley-podvergsya-vzlomu/) (en ruso).*
