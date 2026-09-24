import type { Post } from "../types";

const post: Post = {
  slug: "chatbot-whatsapp-ia-empresas",
  title: "Chatbot de WhatsApp con IA para empresas: guía completa",
  seoTitle: "Chatbot de WhatsApp con IA para empresas: guía",
  description:
    "Cómo montar un chatbot de WhatsApp con IA: app Business frente a la API, requisitos de Meta, plantillas, opt-in, casos de uso, CRM, RGPD y errores a evitar.",
  excerpt:
    "WhatsApp es el canal donde ya están tus clientes. Te explicamos qué necesitas para poner un chatbot con IA en WhatsApp Business, qué puede hacer y cómo hacerlo bien.",
  category: "IA",
  tags: ["WhatsApp", "chatbot", "IA", "atención al cliente", "WhatsApp Business API"],
  author: "joan",
  publishDate: "2026-09-24",
  updatedDate: "2026-09-24",
  tldr:
    "Para tener un chatbot de WhatsApp con IA necesitas la WhatsApp Business Platform (la API), no la app gratuita: una cuenta empresarial de Meta, un número dedicado, plantillas aprobadas para iniciar conversaciones y el consentimiento del cliente. Conectado a tu agenda o CRM, puede gestionar citas, pedidos, reservas y soporte, pasando a una persona cuando haga falta.",
  keyTakeaways: [
    "La app WhatsApp Business sirve para atender a mano; un chatbot con IA requiere la WhatsApp Business Platform (API).",
    "Necesitas cuenta empresarial de Meta, número dedicado, plantillas aprobadas para mensajes que inicias tú y opt-in del cliente.",
    "El valor real aparece al conectar el bot con tu agenda, CRM o sistema de pedidos.",
    "El traspaso a una persona con todo el contexto es tan importante como la IA.",
    "RGPD, transparencia y respeto a las políticas de Meta son obligatorios, no opcionales.",
  ],
  content: `WhatsApp es probablemente la app de mensajería que más usan tus clientes en España. Por eso cada vez más empresas quieren atender, vender y gestionar citas por ahí. El problema es que, cuando el volumen crece, responder a mano se vuelve insostenible, y los bots de menús rígidos frustran a los clientes.

Un chatbot de WhatsApp con IA resuelve ambas cosas: entiende lo que escribe el cliente con sus propias palabras y puede actuar sobre tus sistemas. En esta guía te explicamos qué necesitas, qué puede hacer, cómo conectarlo y qué errores evitar.

## ¿Qué es un chatbot de WhatsApp con IA?

Es un asistente que responde automáticamente a los mensajes de WhatsApp de tu empresa usando un modelo de lenguaje, de modo que entiende preguntas escritas de forma natural y no solo opciones de menú. Si además está conectado a tus sistemas, puede consultar datos y realizar acciones, como dar una cita o comprobar un pedido.

Hay tres niveles habituales:

- **Bot de menús:** «Pulsa 1 para horarios, 2 para pedidos». Sencillo, pero rígido.
- **Chatbot con IA:** entiende lenguaje natural y responde a partir de tu información (horarios, tarifas, políticas).
- **Agente de IA en WhatsApp:** además de responder, usa herramientas: consulta la agenda, crea reservas, actualiza el CRM o escala a una persona. Si quieres profundizar en esta diferencia, lee nuestra guía sobre [agentes de IA para empresas](/blog/agentes-ia-empresas-guia-ejemplos).

## ¿WhatsApp Business app o WhatsApp Business Platform (API)?

Para un chatbot con IA necesitas la WhatsApp Business Platform, conocida como la API de WhatsApp Business. La app WhatsApp Business es gratuita y útil para atender a mano desde el móvil, pero no está pensada para conectar un sistema de IA propio ni para integrarse con tu CRM.

| Aspecto | WhatsApp Business app | WhatsApp Business Platform (API) |
|---|---|---|
| Para quién | Autónomos y pequeños negocios que atienden a mano | Empresas que quieren automatizar e integrar |
| Uso | Desde el móvil o dispositivos vinculados | A través de software conectado a la API |
| Automatización | Mensajes de bienvenida, ausencia y respuestas rápidas | Chatbots y agentes con IA, flujos a medida |
| Integración con CRM o agenda | Muy limitada | Completa, mediante API y webhooks |
| Varios agentes humanos | Limitado | Sí, mediante una bandeja compartida |
| Coste | App gratuita | Meta cobra por determinados mensajes, más el software o proveedor que uses |

Puedes acceder a la plataforma directamente a través de la Cloud API de Meta o mediante un proveedor de soluciones empresariales (BSP), que añade herramientas como bandejas de entrada compartidas o gestión de plantillas.

## ¿Qué necesitas para tener un chatbot de WhatsApp con IA?

Necesitas una cuenta empresarial en Meta, un número de teléfono para WhatsApp, un perfil de empresa con nombre visible aprobado, plantillas de mensaje aprobadas para iniciar conversaciones, el consentimiento de tus clientes y el software que conecta WhatsApp con la IA y tus sistemas.

### Cuenta empresarial de Meta y verificación

Necesitas un portfolio empresarial en Meta (lo que antes se llamaba Business Manager) y una cuenta de WhatsApp Business asociada. La verificación de la empresa, en la que aportas documentación oficial, es recomendable y en la práctica necesaria para ampliar los límites de envío y dar credibilidad a tu perfil.

### Número de teléfono

Necesitas un número capaz de recibir un código de verificación por SMS o llamada. Lo habitual es usar un número dedicado. Si ya usas ese número en la app WhatsApp Business, existen opciones de migración y, en algunos casos, Meta permite mantener la app y la plataforma en el mismo número; revisa las condiciones vigentes antes de decidir, porque no todas las funciones están disponibles en todos los casos.

### Plantillas de mensaje aprobadas

Aquí está una de las claves del modelo de Meta:

- Cuando el cliente te escribe, se abre una **ventana de atención de 24 horas** en la que puedes responder libremente, y el bot puede conversar con normalidad.
- Fuera de esa ventana, o si eres tú quien inicia la conversación, solo puedes enviar **plantillas previamente aprobadas por Meta**.
- Las plantillas se clasifican por categoría: **marketing** (promociones, novedades), **utilidad** (confirmaciones, recordatorios, avisos de envío) y **autenticación** (códigos de verificación).

Meta cobra según el tipo de mensaje, principalmente por las plantillas y en función de su categoría y del país del destinatario. Su modelo de precios ha cambiado varias veces en los últimos años, así que consulta siempre la tabla oficial vigente antes de hacer números.

### Consentimiento (opt-in)

Para enviar mensajes que inicias tú, el cliente debe haber aceptado recibirlos por WhatsApp. Ese consentimiento se puede recoger en un formulario web, en el proceso de compra o en el propio chat, y debe quedar claro qué tipo de mensajes va a recibir. Además, debes facilitarle dejar de recibirlos.

### Políticas de Meta sobre IA

Meta revisa sus políticas de la plataforma con frecuencia. Actualmente restringe el uso de la API para ofrecer asistentes de IA de propósito general, pero permite los bots que atienden a los clientes de tu negocio sobre tus productos y servicios, que es exactamente el caso de un chatbot de empresa. Aun así, conviene revisar las políticas de mensajería y comercio vigentes antes de lanzar.

## ¿Para qué puede usar una empresa un chatbot de WhatsApp?

Los usos más rentables son los que combinan mucho volumen de conversaciones con tareas repetitivas: citas, reservas, pedidos, soporte y seguimiento. El bot resuelve lo habitual y deja a tu equipo lo que realmente requiere criterio.

### Gestión de citas

Clínicas, centros de estética, talleres o asesorías: el bot consulta la agenda, ofrece huecos, confirma la cita y envía un recordatorio con una plantilla de utilidad. Si el cliente responde que no puede ir, lo reprograma.

### Reservas

Restaurantes, alojamientos o actividades: el bot comprueba disponibilidad, recoge número de personas y preferencias, y confirma. Si hay una petición especial, la traslada al equipo.

### Pedidos

Distribuidores, tiendas o negocios de comida: el cliente escribe lo que quiere con sus palabras, el bot lo interpreta, lo contrasta con el catálogo y lo registra en tu sistema de pedidos, pidiendo confirmación antes de cerrarlo.

### Soporte y preguntas frecuentes

Estado de un envío, horarios, condiciones de devolución, garantías, documentación necesaria. El bot responde a partir de tu información actualizada y, si no sabe algo, lo dice y deriva.

### Seguimiento y fidelización

Avisos de envío, encuestas tras el servicio o recordatorios de revisión periódica. Si trabajas la fidelización, puedes combinar WhatsApp con [tarjetas de fidelización en Apple y Google Wallet](/wallet), que permiten enviar avisos al móvil sin depender de plantillas.

## ¿Cómo se conecta el chatbot de WhatsApp con tu CRM o tu agenda?

Se conecta mediante las APIs de tus herramientas: cuando llega un mensaje, WhatsApp lo envía a tu sistema a través de un webhook, la IA decide qué hacer y, si necesita datos o realizar una acción, llama a la API de tu agenda, CRM o ERP. La respuesta vuelve al cliente por WhatsApp.

Integraciones habituales:

- **Agenda:** Google Calendar, Outlook o el software de citas de tu sector.
- **CRM:** crear o actualizar el contacto, registrar la conversación y la oportunidad.
- **Sistema de pedidos o ERP:** consultar stock, registrar pedidos, ver el estado de un envío.
- **Base de conocimiento:** documentos, tarifas y políticas que el bot usa para responder.
- **Herramienta de tickets:** abrir incidencias con el resumen de la conversación.

Un consejo práctico: identifica al cliente por su número de teléfono en el CRM desde el primer mensaje. Así el bot puede saludarlo por su nombre, conocer su historial y evitar preguntas innecesarias.

## ¿Cómo debe funcionar el traspaso a una persona?

El bot debe pasar la conversación a una persona cuando el cliente lo pide, cuando detecta frustración o un tema sensible, o cuando no tiene la información necesaria, y debe hacerlo con un resumen para que el cliente no tenga que repetir nada.

Buenas prácticas de traspaso:

- Permite siempre pedir hablar con una persona, con palabras naturales.
- Define reglas claras: quejas, temas de salud o legales, importes altos o clientes muy enfadados van a una persona.
- Usa una bandeja compartida donde el equipo vea la conversación completa y un resumen automático.
- Fuera de horario, informa de cuándo responderá una persona en lugar de dejar al cliente sin respuesta.
- Cuando la persona termine, el bot puede retomar la conversación si procede.

## ¿Qué dice el RGPD sobre los chatbots de WhatsApp?

Un chatbot de WhatsApp trata datos personales (número, nombre, contenido de los mensajes), así que debes cumplir el RGPD: tener una base legal, informar al cliente, recoger su consentimiento para comunicaciones comerciales, limitar los datos tratados y firmar contratos de encargo del tratamiento con tus proveedores.

Checklist básico:

- Informa al inicio de la conversación de que está atendiendo un asistente automático y enlaza a tu política de privacidad.
- Recoge y guarda la prueba del opt-in para los mensajes que inicias tú.
- No pidas por WhatsApp datos que no necesites, especialmente datos de salud o bancarios, salvo que el proceso esté diseñado para ello con las garantías adecuadas.
- Revisa qué proveedores intervienen (Meta, BSP, proveedor del modelo de IA, alojamiento) y dónde se tratan los datos.
- Define cuánto tiempo conservas las conversaciones.
- Facilita que el cliente ejerza sus derechos y se dé de baja de las comunicaciones.

## Errores comunes al lanzar un chatbot de WhatsApp

- **Usar la app para algo que requiere la API:** herramientas no oficiales que automatizan la app pueden provocar el bloqueo del número.
- **Enviar promociones sin opt-in:** además del problema legal, los bloqueos y denuncias de los usuarios afectan a la calidad de tu número y a tus límites de envío.
- **Bot sin salida:** si el cliente no puede llegar a una persona, la frustración está garantizada.
- **Respuestas inventadas:** el bot debe responder solo a partir de tu información y admitir cuándo no sabe algo.
- **No conectar sistemas:** un bot que solo da información general desaprovecha lo que hace útil al canal.
- **Plantillas mal planteadas:** si una plantilla de utilidad incluye contenido promocional, Meta puede reclasificarla o rechazarla.
- **No revisar conversaciones:** leer una muestra cada semana es la forma más rápida de mejorar.

## ¿Qué deberías medir?

Mide cuántas conversaciones resuelve el bot sin intervención, cuántas escala, el tiempo de respuesta, las conversiones (citas, reservas, pedidos) y la satisfacción del cliente.

| Métrica | Por qué importa |
|---|---|
| Conversaciones resueltas sin humano | Indica cuánto trabajo asume el bot |
| Tasa de traspaso a persona | Si es muy alta, faltan conocimientos o integraciones |
| Tiempo de primera respuesta | La principal ventaja percibida por el cliente |
| Citas, reservas o pedidos cerrados | El impacto directo en el negocio |
| Bajas y bloqueos tras plantillas | Señal de mensajes poco relevantes o frecuencia excesiva |
| Satisfacción tras la conversación | Si la experiencia mejora o empeora |

## Cómo te puede ayudar ALCARIA

En ALCARIA diseñamos chatbots y [agentes de IA](/servicios/agentes-ia) para WhatsApp, web y correo, conectados a tu agenda, CRM o sistema de pedidos, con traspaso a tu equipo y pensados para cumplir el RGPD y las políticas de Meta. Si WhatsApp es solo una parte de un proceso más amplio, también podemos ayudarte con la [automatización del resto del proceso](/servicios/automatizacion-de-procesos).

Si quieres valorar si un chatbot de WhatsApp tiene sentido en tu negocio, [escríbenos](/contact) y lo vemos contigo.`,
  faq: [
    {
      q: "¿Se puede poner un chatbot con IA en WhatsApp Business?",
      a: "Sí, pero a través de la WhatsApp Business Platform, es decir, la API, no con la app gratuita. La app solo permite mensajes automáticos básicos como bienvenida, ausencia y respuestas rápidas. Con la API puedes conectar un modelo de IA y tus sistemas, directamente con la Cloud API de Meta o a través de un proveedor de soluciones empresariales.",
    },
    {
      q: "¿Qué diferencia hay entre WhatsApp Business y la API de WhatsApp?",
      a: "La app WhatsApp Business es gratuita y está pensada para atender a mano desde el móvil. La WhatsApp Business Platform, o API, permite automatizar con chatbots e IA, integrar CRM y agenda, y atender con varias personas desde una bandeja compartida. A cambio, requiere una cuenta empresarial de Meta, plantillas aprobadas y Meta cobra por determinados mensajes.",
    },
    {
      q: "¿Cuánto cuesta la API de WhatsApp Business?",
      a: "Meta cobra principalmente por los mensajes de plantilla, según su categoría (marketing, utilidad o autenticación) y el país del destinatario, mientras que las respuestas dentro de la ventana de atención tienen un tratamiento distinto. A eso se suma el coste del software, del proveedor si lo usas y del modelo de IA. Consulta siempre la tabla oficial vigente de Meta.",
    },
    {
      q: "¿Qué es una plantilla de WhatsApp y por qué hay que aprobarla?",
      a: "Es un mensaje predefinido que Meta revisa antes de que puedas usarlo. Es obligatorio para iniciar conversaciones o escribir al cliente cuando han pasado más de 24 horas desde su último mensaje. Sirve para evitar spam. Se clasifican en marketing, utilidad y autenticación, y pueden incluir variables como el nombre o la fecha de una cita.",
    },
    {
      q: "¿Necesito el consentimiento del cliente para escribirle por WhatsApp?",
      a: "Sí. Para enviar mensajes que inicias tú, el cliente debe haber aceptado recibirlos por WhatsApp, tal como exigen las políticas de Meta, y para comunicaciones comerciales también lo exige la normativa de protección de datos. Recoge el opt-in de forma clara, guarda la prueba y ofrece siempre una forma sencilla de darse de baja.",
    },
    {
      q: "¿Puede el chatbot de WhatsApp pasar la conversación a una persona?",
      a: "Sí, y debería. Un buen chatbot deriva a una persona cuando el cliente lo pide, cuando detecta una queja o un tema sensible, o cuando no tiene información suficiente. Lo ideal es usar una bandeja compartida donde el equipo vea toda la conversación con un resumen automático, para que el cliente no tenga que repetir nada.",
    },
  ],
  related: [
    "agentes-ia-empresas-guia-ejemplos",
    "agentes-ia-revolucion-pymes-2025",
    "tarjetas-wallet-canal-comunicacion",
  ],
};

export default post;
