# Documentación de la Sección `AgentSection` (AI Chatbot)

Esta documentación detalla la arquitectura, los componentes y la configuración necesaria para replicar la funcionalidad del asistente virtual interactivo (`AgentSection`) en cualquier otro proyecto basado en Next.js (App Router), React y Tailwind CSS.

## 1. Visión General y Arquitectura

La sección `AgentSection` implementa un chat interactivo impulsado por IA (LLM) que funciona en tiempo real (streaming). Su objetivo es interactuar con los visitantes, responder dudas en base a un prompt del sistema y detectar "leads" (potenciales clientes) para notificarlos automáticamente.

### Flujo de Arquitectura
1. **Frontend (Client-side):** El componente `Chat.tsx` maneja la interfaz, el estado de los mensajes, el auto-scroll y realiza llamadas a la API interna.
2. **Backend (API Route - Server-side):** La ruta `/api/chat/route.ts` recibe el historial de la conversación, inyecta el `SYSTEM_PROMPT` para dar contexto, y realiza la petición segura a la API externa de IA.
3. **Servicio de IA (Groq):** Procesa la solicitud usando el modelo `llama-3.3-70b-versatile` y devuelve la respuesta fragmentada (streaming).
4. **Detección de Leads (N8N):** En paralelo, el backend analiza los mensajes del usuario buscando palabras clave de intención de compra. Si detecta un lead, dispara un webhook asíncrono a N8N.

## 2. Requisitos y Dependencias

Para replicar este sistema, el proyecto destino debe tener:
*   **Next.js** (App Router recomendado)
*   **React** (Hooks: `useState`, `useRef`, `useEffect`, `useCallback`)
*   **Tailwind CSS** (Para los estilos)

### Variables de Entorno (`.env`)
Se requieren las siguientes variables de entorno:
```env
# Clave API de Groq para acceder al modelo LLM
GROQ_API_KEY=tu_api_key_de_groq

# (Opcional) Webhook de N8N o Make/Zapier para enviar notificaciones de nuevos leads
N8N_WEBHOOK_URL=https://tu-webhook-url.com/webhook/...
```

## 3. Estructura de Archivos

Estos son los archivos involucrados que deben ser trasladados/adaptados:

```text
src/
├── types/
│   └── index.ts                     # Definición de tipos (Message)
├── lib/
│   └── constants.ts                 # Constantes, links de WhatsApp y SYSTEM_PROMPT
├── components/
│   ├── ui/
│   │   ├── Section.tsx              # Wrapper de sección base
│   │   ├── SectionHeading.tsx       # Título y subtítulo de la sección
│   │   └── Chat.tsx                 # [CORE] Interfaz principal del Chat interactivo
│   └── sections/
│       └── AgentSection.tsx         # Contenedor final de la sección
└── app/
    └── api/
        └── chat/
            └── route.ts             # [CORE] Endpoint backend que maneja el streaming y la IA
```

## 4. Desglose de Componentes Clave

### A. Tipos y Constantes (`src/types/index.ts` y `src/lib/constants.ts`)
Debes definir el tipo de mensaje y las constantes que alimentan al bot.
*   **`Message`**: Interfaz con `role` ("user" | "assistant") y `content` (string).
*   **`SYSTEM_PROMPT`**: Las instrucciones estrictas que le dan la "personalidad" y el conocimiento al bot (qué servicios vende, precios, reglas de lo que NO debe decir).
*   **`SUGGESTED_QUESTIONS`**: Array de strings con preguntas rápidas para romper el hielo.

### B. El Componente Chat (`src/components/ui/Chat.tsx`)
Este es el componente cliente (`"use client"`) más importante. Sus características técnicas principales son:
*   **Estados**: Maneja `messages` (historial), `input` (texto actual) y `isLoading` (estado de carga).
*   **Streaming**: Usa el API `fetch` para llamar a `/api/chat` y lee el stream resultante usando `response.body.getReader()` y un `TextDecoder`. Va actualizando el último mensaje del asistente pedazo a pedazo (`accumulated += decoder.decode(value)`).
*   **Auto-Scroll**: Utiliza un `useRef` en el contenedor de mensajes y un `useEffect` que se dispara cada vez que `messages` cambia para hacer scroll hacia abajo.
*   **Animación de "Escribiendo"**: Muestra 3 puntos rebotando (`animate-bounce`) cuando `isLoading` es true y aún no hay contenido en la respuesta.
*   **Fallback de WhatsApp**: Un enlace en la parte inferior para que, si falla o el usuario lo prefiere, pueda ir directo a WhatsApp.

### C. La Ruta API (`src/app/api/chat/route.ts`)
Actúa como proxy de seguridad (para no exponer la API key) y controlador lógico.
*   **Conexión a Groq**: Utiliza la API de Groq (`https://api.groq.com/openai/v1/chat/completions`) pasándole el `SYSTEM_PROMPT` más los últimos mensajes del usuario (limitados a 20 mensajes de máximo 500 caracteres para evitar abusos).
*   **Streaming Response**: Crea un `ReadableStream` que lee los fragmentos (chunks) SSE (Server-Sent Events) de Groq, los parsea (`JSON.parse`) extrayendo el contenido del delta, y los envía (enqueue) de vuelta al cliente.
*   **Detección de Leads (`detectLead` & `notifyN8N`)**:
    *   Lee los mensajes del usuario y cuenta cuántas "palabras clave" de intención (ej. "precio", "contratar", "whatsapp") ha mencionado.
    *   Si menciona 2 o más, dispara asíncronamente un evento POST a la URL de `N8N_WEBHOOK_URL` con el historial de la conversación.

## 5. Pasos para Replicar en Otro Proyecto

1.  **Instalar dependencias necesarias** (Tailwind, React, etc.).
2.  **Crear el archivo de tipos**: Copiar la interfaz `Message`.
3.  **Configurar las Constantes**: Crear un `constants.ts` con el `SYSTEM_PROMPT` adaptado al nuevo negocio.
4.  **Crear la Ruta de la API**: Copiar `route.ts` en `app/api/chat/route.ts` (si usas App Router). Modificar `MODEL` o la URL de la API si decides usar OpenAI/Anthropic en lugar de Groq.
5.  **Crear el Componente `Chat.tsx`**: Copiar el código del frontend. Ajustar los colores de Tailwind (`bg-primary`, `text-accent`, etc.) al sistema de diseño del nuevo proyecto.
6.  **Configurar Variables de Entorno**: Agregar `GROQ_API_KEY` en el `.env`.

Con esta arquitectura, obtienes un componente "Drop-in" altamente reutilizable, eficiente (gracias al streaming), seguro (claves en el servidor) y proactivo (detección de leads).
