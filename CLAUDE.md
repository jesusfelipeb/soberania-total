# CLAUDE.md — Proyecto: Soberanía Total (Marca Personal)

## Qué es este proyecto

Marca personal de Felipe bajo el concepto **"Soberanía Total"** — la intersección entre soberanía financiera, expansión de consciencia y filosofía de vida. Contenido en español para audiencia hispanohablante global.

**Diferenciador clave:** Felipe es venezolano y vivió en persona el colapso del sistema fiat. No teoriza — tiene experiencia directa de lo que pasa cuando un gobierno destruye su moneda.

---

## Stack técnico

- **Framework:** Next.js 14 con App Router
- **Estilos:** Tailwind CSS
- **Lenguaje:** TypeScript
- **Newsletter:** Beehiiv (integración vía API)
- **Base de datos:** Supabase (para formularios, suscriptores, métricas)
- **Deploy:** Vercel
- **Analytics:** Google Analytics + métricas propias

---

## Estructura del proyecto

```
soberania-total/
├── app/
│   ├── page.tsx              → Landing page principal
│   ├── newsletter/           → Página de suscripción al newsletter
│   ├── manifiesto/           → Página del manifiesto de la marca
│   └── recursos/             → Recursos gratuitos para la audiencia
├── components/
│   ├── ui/                   → Componentes base (botones, cards, inputs)
│   ├── sections/             → Secciones de la landing (hero, pilares, cta)
│   └── layout/               → Header, footer, navegación
├── lib/
│   ├── beehiiv.ts            → Cliente de API de Beehiiv (newsletter)
│   └── supabase.ts           → Cliente de Supabase
├── public/
│   └── assets/               → Imágenes, logo, íconos
└── content/
    └── newsletter/           → Artículos y drafts del newsletter en MDX
```

---

## Los 4 pilares de contenido (contexto para decisiones de diseño)

1. **El Sistema Expuesto** — Cómo fluye el dinero, macro, por qué el fiat colapsa
2. **Bitcoin como filosofía** — Soberanía monetaria, no precio especulativo
3. **Consciencia y Realidad** — Grinberg, Krishnamurti, psicodelia, condicionamiento mental
4. **Vida Diseñada** — El proceso real de Felipe, sin filtros

---

## Audiencia objetivo

Hispanohablante global, 22–40 años. Personas que ya tienen contacto con ideas de "despertar" o consciencia, pero no han conectado eso con su realidad financiera. Buscan coherencia entre interior y exterior.

---

## Referentes visuales y de tono

- **Tono:** Directo, reflexivo, sin condescendencia. No predica. Señala. No da recetas. Abre preguntas.
- **Estética:** Oscura, sobria, con peso. No colorida ni "crypto bros". Más cercana a un manifiesto filosófico que a un blog de finanzas.
- **Referentes de diseño:** Dark mode, tipografía con carácter, mucho espacio en blanco, sin exceso de elementos.
- **Lo que NO es:** Guru espiritual. Trader de criptos. Influencer de lifestyle.

---

## Modelo de monetización (para construir el funnel correctamente)

| Nivel | Producto | Precio |
|---|---|---|
| 0 | Contenido público (Reels, TikTok) | Gratis |
| 1 | Newsletter premium | $10–15/mes |
| 2 | Comunidad privada (Telegram) | $30–50/mes |
| 3 | Mentoría 1-1 | $200–500/sesión |

El sitio debe construirse pensando en este funnel: cada página empuja al siguiente nivel.

---

## Prioridades de desarrollo

### MVP (primero esto)
- [ ] Landing page con hero, los 4 pilares, y CTA al newsletter
- [ ] Formulario de suscripción conectado a Beehiiv
- [ ] Página de manifiesto
- [ ] Deploy en Vercel con dominio

### V2 (después del MVP)
- [ ] Página de recursos gratuitos
- [ ] Sistema de newsletter con MDX
- [ ] Integración de métricas (conversión de suscriptores)
- [ ] Página de comunidad (waitlist para Telegram privado)

### V3 (cuando haya audiencia)
- [ ] Página de mentoría con Cal.com
- [ ] Dashboard de métricas privado
- [ ] Automatizaciones de contenido

---

## Convenciones específicas del proyecto

- Los textos del sitio van en español siempre
- El tono del copy debe ser consistente con los 4 pilares — no sonar como un SaaS genérico
- Los CTAs siempre empujan hacia la lista de correo (el activo más importante)
- No construir features de monetización hasta tener 500+ suscriptores de newsletter

---

## Variables de entorno necesarias

```bash
NEXT_PUBLIC_BEEHIIV_PUBLICATION_ID=   # ID de publicación en Beehiiv
BEEHIIV_API_KEY=                       # API key de Beehiiv
NEXT_PUBLIC_SUPABASE_URL=              # URL del proyecto Supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=         # Anon key de Supabase
NEXT_PUBLIC_GA_ID=                     # Google Analytics ID (opcional por ahora)
```

---

## Lo que NO hacer en este proyecto

- ❌ No construir features de pago hasta tener audiencia validada
- ❌ No usar colores brillantes ni estética "crypto" genérica
- ❌ No escribir copy genérico — cada texto debe sonar como Felipe
- ❌ No priorizar diseño sobre funcionalidad del funnel (newsletter primero)
- ❌ No construir V2 antes de tener el MVP desplegado y funcionando

## Estado actual (2026-03-27)

### Completado
- Landing page MVP con 5 secciones: Hero, Sobre mí, 
  Pilares, Links/Productos, Newsletter
- Diseño luxury dark mode: azul medianoche + dorado
- Foto real de Felipe en sección "Sobre mí"
- Redes sociales vinculadas (@jesusfelipeb / @jesusfelipebr)
- Formulario de newsletter conectado a Beehiiv (funcionando)
- Endpoint app/api/newsletter/route.ts operativo

### Próximos pasos (Track B — técnico)
- [ ] Deploy en Vercel con dominio propio
- [ ] Conectar Cal.com para el botón "Agendar sesión"
- [ ] Página /manifiesto
- [ ] Waitlist para comunidad privada de Telegram
- [ ] Optimización mobile (revisar en celular real)

### Próximos pasos (Track A — contenido)
- [ ] Grabar primer Reel de presentación (guion listo)
- [ ] Crear cuenta en Instagram y TikTok con @jesusfelipeb
- [ ] Primer artículo de newsletter