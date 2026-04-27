# CLAUDE.md — Proyecto: Soberanía Total (Sitio de Servicios)

## Qué es este proyecto

Sitio web de **conversión directa** para vender los servicios de Felipe: desarrollo web, automatización con IA y consultoría financiera. Prioridad: generar ingresos inmediatos.

**Narrativa central:** Felipe es venezolano, economista formado en ULA, vivió 2 colapsos económicos (Venezuela + Argentina 2020). Aprendió por necesidad. Construye herramientas reales, no teoría.

**URL producción:** https://jesusfelipeb.vercel.app
**Repositorio (no se renombró):** https://github.com/jesusfelipeb/soberania-total
**Branding split:** carpeta y repo siguen llamándose `soberania-total`; el sitio público y el proyecto en Vercel se llaman `jesusfelipeb`.

---

## Stack técnico

- **Framework:** Next.js 14 con App Router
- **Estilos:** Tailwind CSS
- **Lenguaje:** TypeScript
- **Deploy:** Vercel (auto-deploy en push a main)
- **LLM Chat:** Groq (Llama 3.3 70B) vía API HTTP, streaming
- **Newsletter:** Beehiiv (API integrada, endpoint en /api/newsletter)
- **Lead capture:** Apps Script Web App → Google Sheets (opcional, configurable por env var)
- **Contacto principal:** WhatsApp (+5491132924310)
- **Email:** jesusbecerra91@gmail.com

---

## Estructura del proyecto

```
soberania-total/
├── app/
│   ├── page.tsx              → Landing de conversión (página única)
│   ├── api/
│   │   ├── newsletter/       → Endpoint Beehiiv
│   │   └── chat/route.ts     → Endpoint streaming a Groq + lead detection (Edge runtime)
│   ├── layout.tsx            → Layout con Inter + Space Grotesk, metadata SEO completa, JSON-LD
│   ├── sitemap.ts            → Sitemap dinámico (/sitemap.xml)
│   ├── robots.ts             → robots.txt dinámico
│   ├── opengraph-image.tsx   → OG image 1200×630 dinámica
│   ├── icon.tsx              → Favicon "F" verde neón
│   └── globals.css           → Dark theme + animaciones (aurora, marquee, bubble-in, etc.)
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          → Foto + headline rotativo + aurora + tarjeta flotante + marquee
│   │   ├── Problem.tsx       → 3 pain points del cliente
│   │   ├── Services.tsx      → 3 servicios con precios y CTAs
│   │   ├── CaseStudies.tsx   → 3 casos: Kim Cedeño, Finara, Banana Express
│   │   ├── Credibility.tsx   → Historia personal + credenciales
│   │   └── CTAFinal.tsx      → Cierre con WhatsApp grande
│   ├── ChatWidget.tsx        → FAB + panel modal + streaming + bubble invite (reemplaza WhatsAppButton)
│   ├── StructuredData.tsx    → JSON-LD (Person, ProfessionalService, Service x3, FAQPage, WebSite)
│   ├── WhatsAppButton.tsx    → Legacy — ya no se usa, queda como respaldo
│   └── layout/
│       └── Footer.tsx        → Links: WhatsApp, Instagram, LinkedIn, Telegram
├── lib/
│   ├── config.ts             → SITE_URL (env-aware), WhatsApp number, links, mensajes pre-llenados
│   └── chatPrompt.ts         → SYSTEM_PROMPT del agente, sugerencias, lead keywords, modelo Groq
├── types/
│   └── chat.ts               → ChatMessage, LeadPayload
└── public/
    └── assets/fotoperfil.jpg → Foto B&W profesional
```

### Componentes legacy (no se usan actualmente)
- `components/WhatsAppButton.tsx` — reemplazado por ChatWidget
- `components/sections/SobreMi.tsx`, `Pilares.tsx`, `LinksProductos.tsx`, `Newsletter.tsx`
- `components/ui/StarField.tsx`

---

## Servicios ofrecidos (precios actuales)

| Servicio | Precio | Tiempo | WhatsApp pre-llenado |
|---|---|---|---|
| Desarrollo Web (Next.js) | Desde $80 USD | 5-14 días | "Necesito un sitio web profesional..." |
| Automatización IA + ManyChat + Claude | Desde $600 USD | 3-5 días | "Me interesa automatizar respuestas..." |
| Consultoría Financiera (educativa) | $70 USD/sesión | 60 min + recursos | "Quiero agendar una consultoría..." |

**Importante legal:** se llama "consultoría", **NO "asesoría"**. Felipe no es asesor financiero registrado. La consultoría es educativa: enseña conceptos para que el cliente decida solo. NUNCA recomendar inversiones específicas, productos financieros ni promesas de retorno.

---

## Casos de éxito en el sitio

1. **Kim Cedeño** (Life Coach & Tarotista) — Desarrollo Web. Sitio listo, **aún no lanzado** por la clienta. NO mencionar métricas inventadas.
2. **Finara** (SaaS de Salud Financiera) — Desarrollo del MVP
3. **Banana Express** (Verdulería con delivery, Palermo BA) — Negocio propio de Felipe, ecommerce con delivery

---

## Diseño actual

- **Theme:** Luxury Tech Obsidian — `#050505` + `#00FF88` (esmeralda) + glassmorphism
- **Tipografía:** Inter para body + **Space Grotesk** para headlines (variable `--font-display`)
- **Animaciones:** CSS puro (aurora drift, ring-rotate, marquee, fade-up, bubble-in, scroll-line). Respetan `prefers-reduced-motion`.
- **Mobile first:** Diseñado para 375px+, botones 44px+ height
- **Bundle:** ~13 kB JS — sigue siendo muy ligero a pesar del chat
- **Sin framer-motion** instalado en deps pero no usado (todo CSS)

---

## Tono y comunicación

- Reflexivo, no motivacional. Demuestra, no predica
- "Viví esto, aprendí esto, así funciona"
- Trato de **"vos"** rioplatense (matchea con los CTAs y el agente del chat)
- Sutil ironía cuando corresponda
- NUNCA sonar como gurú, trader, o influencer

---

## Variables de entorno

```bash
# Newsletter (Beehiiv)
NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID=
BEEHIIV_API_KEY=

# Supabase (futuro)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Analytics
NEXT_PUBLIC_GA_ID=                       # G-H2MFGEKE6S

# AI Chat
GROQ_API_KEY=                            # gsk_... — generar en console.groq.com
LEADS_WEBHOOK_URL=                       # opcional — Apps Script Web App URL para Google Sheets

# SEO
NEXT_PUBLIC_SITE_URL=                    # https://jesusfelipeb.vercel.app (o dominio propio)
NEXT_PUBLIC_GOOGLE_VERIFICATION=         # opcional — código de Google Search Console
```

---

## Estado actual (2026-04-26)

### Completado en esta sesión
- [x] **Hero rediseñado nivel 3** — display font Space Grotesk, headline rotativo (venden/convierten/escalan), aurora animada, mockup de browser tenue, foto con anillo conic gradient, tarjeta flotante "Sin agencia", marquee de casos con fade lateral, scroll indicator vertical
- [x] **Sección Servicios** — copy legalmente seguro, "Asesoría" → "Consultoría", precios actualizados ($80 / $600 / $70), agentes de IA destacados, consultoría enfocada en pymes
- [x] **Chat Widget con IA** — FAB + panel modal + streaming desde Groq Llama 3.3 70B + bubble invite "¿Alguna duda? Hablá con mi agente" + handover a WhatsApp después de 4 mensajes + lead detection con webhook a Apps Script (opcional) + SYSTEM_PROMPT robusto con reglas legales
- [x] **SEO técnico profesional** — metadata completa (title template, OG, Twitter, canonical, robots), JSON-LD con LocalBusiness/Person/Service x3/FAQPage/WebSite, sitemap dinámico, robots.txt dinámico, viewport theme color, format detection
- [x] **Branding split** — el sitio se llama `jesusfelipeb` en producción, el repo sigue siendo `soberania-total` (no se renombró)

### Completado en sesiones anteriores
- [x] Rebuild a sitio de conversión (7 secciones)
- [x] WhatsApp integrado (+5491132924310)
- [x] Auto-deploy Vercel
- [x] API newsletter Beehiiv (/api/newsletter)
- [x] Foto de perfil B&W
- [x] Favicon custom + OG image dinámica
- [x] GA4 (G-H2MFGEKE6S)
- [x] Sistema de diseño Luxury Tech Obsidian

### Pendiente (técnico)
- [ ] **Renombrar proyecto en Vercel a `jesusfelipeb`** (Settings → General → Project Name)
- [ ] **Configurar `NEXT_PUBLIC_SITE_URL` en Vercel** = https://jesusfelipeb.vercel.app
- [ ] **Verificar Google Search Console** y enviar sitemap.xml
- [ ] **Crear Google Business Profile** (Maps + local SEO)
- [ ] **Comprar dominio propio** (jesusfelipeb.com / .com.ar / .dev) y conectar en Vercel
- [ ] (Opcional) Configurar `LEADS_WEBHOOK_URL` con Apps Script para guardar leads en Google Sheets
- [ ] Formulario de contacto backup (para quien no use chat ni WhatsApp)
- [ ] Página /portfolio con trabajos detallados
- [ ] Limpiar componentes legacy (SobreMi, Pilares, LinksProductos, Newsletter, StarField, WhatsAppButton)

### Pendiente (negocio/ventas) — LA PRIORIDAD REAL
- [ ] Mensajes directos a contactos ofreciendo servicios
- [ ] Publicar en grupos de Facebook de emprendedores
- [ ] Activar LinkedIn para venta local
- [ ] Pedir reviews a clientes para Google Business Profile
- [ ] Primer Reel de presentación

---

## Sistema de diseño

**Estética:** Luxury Tech Obsidian — fondo obsidiana profundo + acento esmeralda + glassmorphism + tipografía display.

**Tokens:**
- Background: `#050505` (obsidian)
- Accent: `#00FF88` (emerald glow), variantes: `neon-bright #33ffaa`, `neon-dim #00cc6a`
- Card bg: `rgba(15, 15, 15, 0.7)`
- Glass border: `rgba(255, 255, 255, 0.08)` → hover `rgba(0, 255, 136, 0.5)`

**Tipografía:**
- Body: Inter (`--font-sans`)
- Display: Space Grotesk (`--font-display`) — para H1 con `font-display`

**Clases clave (en `app/globals.css`):**
- `.glass-card` / `.glass-card-hover` / `.glass-card-accent`
- `.tracking-luxury` (letter-spacing 0.08em uppercase labels)
- `.animate-fade-up` (entrada de elementos)
- `.animate-drift-a` / `.animate-drift-b` (aurora blobs)
- `.animate-ring-rotate` (anillo conic gradient en foto)
- `.animate-marquee` (carrusel infinito)
- `.animate-bubble-in` (bubble invite del chat con delay)
- `.animate-scroll-line` (línea con dot cayendo)
- Todas respetan `prefers-reduced-motion`

**Patrones:**
- Headlines con contraste weight: `font-light` + `font-bold` en Space Grotesk
- Íconos thin-stroke (strokeWidth 1.25)
- Transiciones `duration-500` en hover states
- Gradientes radiales para profundidad

---

## Lo que NO hacer

- ❌ No volver a usar "Asesoría Financiera" — siempre "Consultoría" (regulación)
- ❌ No prometer métricas específicas que no estén comprobadas (Kim Cedeño aún no lanzó la página)
- ❌ No agregar filosofía/marca personal hasta que haya ingresos
- ❌ No construir features innecesarias — cada cambio debe acercar a una venta
- ❌ No complicar el funnel — Chat IA + WhatsApp son los canales
- ❌ No usar colores claros ni estética genérica
- ❌ No instalar dependencias sin justificación clara
- ❌ No renombrar el repo a "jesusfelipeb" — colisionaría con el profile README de GitHub
