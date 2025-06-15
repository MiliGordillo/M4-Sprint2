# Watchlist App

Una aplicación web para crear y gestionar tu lista personal de películas favoritas. Puedes agregar películas populares a tu watchlist, verlas en un modal y eliminarlas cuando quieras. La lista se guarda en el almacenamiento local del navegador.

## Características

- Visualiza una selección de películas populares.
- Agrega películas a tu watchlist con un solo clic.
- Visualiza tu watchlist en un modal elegante.
- Elimina películas de tu watchlist fácilmente.
- Persistencia local: tu lista se guarda aunque cierres el navegador.
- Interfaz moderna con animaciones y diseño responsive.

## Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animaciones)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Estructura del proyecto

```
watchlist-app/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieList.jsx
│   │   └── WatchlistModal.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Uso

- Haz clic en "Agregar a la lista" para añadir una película a tu watchlist.
- Haz clic en "Ver mi lista" para abrir el modal con tus películas guardadas.
- Desde el modal puedes eliminar películas de tu lista.
- Tu lista se guarda automáticamente en el navegador.

## Personalización

- Puedes modificar la lista de películas en [`src/pages/Home.jsx`](src/pages/Home.jsx).
- Los estilos principales están en [`src/index.css`](src/index.css) y se complementan con Tailwind CSS.

## Créditos

- Iconos de [Bootstrap Icons](https://icons.getbootstrap.com/)
- Imágenes de películas de [The Movie Database (TMDB)](https://www.themoviedb.org/)

---

# M4-Sprint2
