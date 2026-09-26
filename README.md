# Bore & Barrel

A small React and Vite catalog demo for browsing firearms. It includes a product catalog, type filters, item details, a cart, and a demo checkout flow.

## Run locally

Requirements: Node.js and npm.

```sh
npm install
npm run dev
```

Vite prints the local URL in the terminal. To create and preview a production build:

```sh
npm run build
npm run preview
```

## Features

- Catalog of eight items with type, caliber, price, description, and local SVG artwork.
- Filter the catalog by All, Pistol, Rifle, or Shotgun.
- Select a card to view item details and add it to the cart.
- Adjust quantities and review the total in Checkout.
- Demo checkout form with required customer and shipping fields.
- Responsive catalog cards, plus About and Contact pages.

## Project layout

- `src/data/guns.js` — catalog entries.
- `public/guns/` — SVG images used by catalog entries.
- `src/pages/` — Catalog, Checkout, About, and Contact views.
- `src/components/` — shared header, footer, and item card.

The cart is held in browser memory and resets when the page is reloaded. Checkout is a front-end demo: it does not send orders to a server or process payments.

## Scripts

- `npm run dev` — start the development server.
- `npm run build` — build the app for production.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run Oxlint.
