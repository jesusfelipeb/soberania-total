# CLAUDE.md — Proyecto: Soberanía Total (Sitio de Servicios)

## Qué es este proyecto

Sitio web de **conversión directa** para vender los servicios de Felipe: desarrollo web, automatización con IA y asesoría financiera. Prioridad: generar ingresos inmediatos.

**Narrativa central:** Felipe es venezolano, economista formado en ULA, vivió 2 colapsos económicos (Venezuela + Argentina 2020). Aprendió por necesidad. Construye herramientas reales, no teoría.

**URL producción:** https://soberania-total.vercel.app
**Repositorio:** https://github.com/jesusfelipeb/soberania-total

---

## Stack técnico

- **Framework:** Next.js 14 con App Router
- **Estilos:** Tailwind CSS
- **Lenguaje:** TypeScript
- **Deploy:** Vercel (auto-deploy en push a main)
- **Newsletter:** Beehiiv (API integrada, endpoint en /api/newsletter)
- **Contacto principal:** WhatsApp (+5491132924310)
- **Email:** jesusbecerra91@gmail.com

---

## Estructura del proyecto

```
soberania-total/
├── app/
│   ├── page.tsx              → Landing de conversión (página única)
│   ├── api/newsletter/       → Endpoint Beehiiv
│   ├── layout.tsx            → Layout con Inter font, metadata SEO
│   └── globals.css           → Dark theme base
├── components/
│   ├── sections/
│   │   ├── Hero.tsx          → Foto + headline + CTA WhatsApp
│   │   ├── Problem.tsx       → 3 pain points del cliente
│   │   ├── Services.tsx      → 3 servicios con precios y CTAs
│   │   ├── CaseStudies.tsx   → 3 casos: Kim Cedeño, Finara, Banana Express
│   │   ├── Credibility.tsx   → Historia personal + credenciales
│   │   └── CTAFinal.tsx      → Cierre con WhatsApp grande
│   ├── WhatsAppButton.tsx    → Botón flotante fijo (esquina inferior derecha)
│   └── layout/
│       └── Footer.tsx        → Links: WhatsApp, Instagram, LinkedIn, Telegram
├── lib/
│   └── config.ts             → Constantes: WhatsApp number, links, mensajes pre-llenados
└── public/
    └── assets/felipe.jpg     → Foto de Felipe
```

### Componentes legacy (del sitio anterior, no se usan actualmente)
- `components/sections/SobreMi.tsx` — Sección "Sobre mí" versión marca personal
- `components/sections/Pilares.tsx` — 4 pilares filosóficos
- `components/sections/LinksProductos.tsx` — Redes sociales + productos
- `components/sections/Newsletter.tsx` — Suscripción a newsletter
- `components/ui/StarField.tsx` — Efecto visual de estrellas

---

## Servicios ofrecidos

| Servicio | Precio | Tiempo | Mensaje WhatsApp pre-llenado |
|---|---|---|---|
| Desarrollo Web (Next.js) | Desde $300 USD | 1-2 semanas | "Necesito un sitio web profesional..." |
| Automatización IA + ManyChat | Desde $200 USD | 3-5 días | "Me interesa automatizar respuestas..." |
| Asesoría Financiera 1-a-1 | $150 USD/sesión | 1 hora | "Quiero agendar una sesión..." |

---

## Casos de éxito en el sitio

1. **Kim Cedeño** (Life Coach & Tarotista) — Desarrollo Web → +10 clientes/mes
2. **Finara** (SaaS de Salud Financiera) — Desarrollo Web → De idea a MVP en 3 semanas
3. **Banana Express** (Verdulería con delivery, Palermo BA) — Desarrollo Web → Pedidos online desde el día 1
   - Repo: github.com/jesusfelipeb/bananaexpress
   - Negocio propio de Felipe, venta de frutas y verduras, boxes con delivery

---

## Diseño actual

- **Theme:** Dark puro (#0a0a0a) + verde neón (#00FF88)
- **Tipografía:** Inter (sans-serif) para todo
- **Mobile first:** Diseñado para 375px+, botones 48px+ height
- **Sin framer-motion:** Componentes estáticos para máxima velocidad
- **Build size:** 9.23 kB JS — carga instantánea

---

## Tono y comunicación

- Reflexivo, no motivacional. Demuestra, no predica
- "Viví esto, aprendí esto, así funciona"
- Trato de "usted" — respeto sin familiaridad forzada
- Sutil ironía cuando corresponda
- NUNCA sonar como gurú, trader, o influencer

---

## Variables de entorno

```bash
NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID=   # ID de publicación en Beehiiv
BEEHIIV_API_KEY=                       # API key de Beehiiv
NEXT_PUBLIC_SUPABASE_URL=              # URL del proyecto Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=         # Anon key de Supabase
NEXT_PUBLIC_GA_ID=                     # Google Analytics ID
```

---

## Estado actual (2026-04-02)

### Completado
- [x] Rebuild completo: de marca personal a sitio de conversión/servicios
- [x] 7 secciones: Hero, Problem, Services, CaseStudies, Credibility, CTAFinal, WhatsAppButton
- [x] WhatsApp integrado (+5491132924310) con mensajes pre-llenados por servicio
- [x] Botón WhatsApp flotante siempre visible
- [x] 3 casos de éxito reales: Kim Cedeño, Finara, Banana Express
- [x] Deploy en Vercel: soberania-total.vercel.app
- [x] Repo GitHub: jesusfelipeb/soberania-total
- [x] Auto-deploy conectado (push a main → deploy automático)
- [x] API newsletter Beehiiv funcionando (/api/newsletter)

### Pendiente (técnico)
- [ ] Dominio propio (conectar en Vercel)
- [ ] Google Analytics (agregar GA_ID en env vars de Vercel)
- [ ] Formulario de contacto backup (nombre, servicio, presupuesto)
- [ ] Página /portfolio con trabajos detallados
- [ ] Optimización de imágenes (favicon personalizado, OG image para compartir)
- [ ] Limpiar componentes legacy que no se usan
- [ ] Automatizar chat de WhatsApp de Banana Express (pendiente del cliente)

### Pendiente (negocio/ventas)
- [ ] Mensajes directos a contactos ofreciendo servicios
- [ ] Publicar en grupos de Facebook de emprendedores
- [ ] Activar LinkedIn para venta local
- [ ] Documentar caso Kim Cedeño con métricas reales
- [ ] Primer Reel de presentación

---

## Lo que NO hacer

- ❌ No agregar filosofía/marca personal hasta que haya ingresos
- ❌ No construir features innecesarias — cada cambio debe acercar a una venta
- ❌ No complicar el funnel — WhatsApp es el canal principal
- ❌ No usar colores claros ni estética genérica
- ❌ No instalar dependencias sin justificación clara
