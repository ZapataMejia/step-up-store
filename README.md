# STEP UP STORE

Landing de catálogo y ventas digitales para **STEP UP STORE**. Pedidos por WhatsApp.

## Propuestas de diseño (4 estilos, azul marca)

| Ruta | Estilo |
|------|--------|
| `/` | **Urbano impacto** (propuesta 2 — sitio en producción) |
| `/opciones` | Selector para comparar las 4 propuestas |
| `/opciones/v1-azul-clasico` | Misma propuesta 1 (ruta alternativa) |
| `/opciones/v2-urbano-impacto` | Urbano oscuro + azul |
| `/opciones/v3-premium-contraste` | Premium negro + azul |
| `/opciones/v4-editorial-suave` | Editorial claro + azul |

## Desarrollo local

```bash
cd step-up-store
npm install
npm run dev
```

Abre `http://localhost:4321` (selector) o directo `http://localhost:4321/opciones/v1-azul-clasico`.

## Configuración rápida

Edita `src/data/store.ts`:

- `facebookUrl` — enlace de la página de Facebook cuando lo tengan
- `catalogLinks` — enlaces a catálogos (cuando te los pasen)
- `paymentMethods` — Addi y Sistecrédito (financiamiento)
- `brands` / `categories` — según el catálogo real

## Deploy en Vercel (cuenta Zapata Mejia)

1. Crear repo en GitHub, por ejemplo `step-up-store`.
2. Subir este directorio.
3. En [vercel.com](https://vercel.com): **Add Project** → importar el repo.
4. Framework: **Astro** (detección automática). Build: `npm run build`, output: `dist`.
5. Dominio: usar `*.vercel.app` o conectar dominio propio después.

## WhatsApp

Número configurado: **304 351 0104** (Colombia +57).
