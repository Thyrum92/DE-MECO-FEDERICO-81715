# TiendApp

SPA de e-commerce desarrollada como proyecto final para CoderHouse. Permite explorar un catálogo de productos, filtrarlos por categoría, ver el detalle de cada uno, armar un carrito de compras y generar una orden de compra que se guarda en Firebase Firestore.

## Funcionalidades

- Catálogo de productos con skeleton loading mientras se obtienen los datos
- Filtro de productos por categoría desde la barra de navegación
- Página de detalle de producto con selector de cantidad
- Carrito de compras: agregar, eliminar y vaciar productos
- Formulario de checkout con validaciones
- Generación y persistencia de órdenes de compra en Firestore
- Notificaciones toast para acciones del carrito
- Navbar sticky con efecto frosted glass

## Stack

| Tecnología | Uso |
|---|---|
| React 19 | UI |
| React Router v7 | Ruteo cliente |
| Firebase Firestore | Base de datos |
| Tailwind CSS v4 + DaisyUI v5 | Estilos |
| Vite | Bundler / dev server |

## Instalación

```bash
npm install
npm run dev
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con HMR |
| `npm run build` | Build de producción |
|
