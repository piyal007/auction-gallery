## Auction Gallery

Modern auction listing UI built with React, Vite, Tailwind CSS, and DaisyUI. Browse active auctions from a local dataset, add items to your favorites, and see a running total of your bid amounts with slick interactions and toasts.

- **Live Demo**: [phero-assignment7.netlify.app](https://phero-assignment7.netlify.app/)

### Features
- **Active auctions table**: Image, title, current bid, and time left
- **Favorites with heart toggle**: Add/remove items; button disables once added
- **Total bids amount**: Auto-calculated sum of favorites in the side card
- **Toasts and animations**: User feedback with React Toastify and subtle UI motion
- **Responsive layout**: Sticky navbar and sticky favorites panel on large screens

### Tech Stack
- **Frontend**: React 19 + Vite 6
- **Styling**: Tailwind CSS 4 + DaisyUI
- **Icons**: lucide-react (dynamic import)
- **Notifications**: react-toastify

### Getting Started
Prerequisites:
- Node.js >= 18 and npm

Install and run locally:

```bash
npm install
npm run dev
```

Build and preview production:

```bash
npm run build
npm run preview
```

### Project Structure
```text
Assignment7/
  public/
    data.json           # Auction items dataset served statically
  src/
    components/
      Navbar/           # Sticky top navigation
      Banner/           # Hero banner
      MainSection/      # Auctions table + Favorites card + Totals
      Footer/           # Footer
    App.jsx
    main.jsx
  index.html
  tailwind.config.js
  vite.config.js
```

### Data
The app fetches auction items from `public/data.json` at runtime (`/data.json`). Update this file to change items, prices, and images.

### Available Scripts
- `npm run dev`: Start dev server
- `npm run build`: Production build
- `npm run preview`: Preview built app
- `npm run lint`: Lint source files

### Deployment
Any static host works. Example with Netlify:
1) `npm run build`
2) Deploy the `dist/` folder to Netlify (drag-and-drop or connect repo with build command `npm run build`).

### Acknowledgements
- Tailwind CSS + DaisyUI for fast, accessible components
- lucide-react for icons
- react-toastify for unobtrusive notifications


