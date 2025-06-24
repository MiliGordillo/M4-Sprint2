import MovieList from "../components/MovieList";

const movies = [
  { id: 1, title: "Lilo y Stitch", image: "https://media.themoviedb.org/t/p/w342/tUae3mefrDVTgm5mRzqWnZK6fOP.jpg" },
  { id: 2, title: "Destino final: Lazos de sangre", image: "https://media.themoviedb.org/t/p/w342/frNkbclQpexf3aUzZrnixF3t5Hw.jpg" },
  { id: 3, title: "Cómo entrenar a tu dragón", image: "https://media.themoviedb.org/t/p/w342/fTpbUIwdsfyIldzYvzQi2K4Icws.jpg" },
  { id: 4, title: "Elio", image: "https://media.themoviedb.org/t/p/w342/fGjwHlv8bCjZypi2bHbbSmyIGMV.jpg" },
  { id: 5, title: "Hurry Up Tomorrow", image: "https://media.themoviedb.org/t/p/w342/wbM7cWkaHpUGiLkjd2ZaJiHLLCr.jpg" },
  { id: 6, title: "Karate Kid: Legends", image: "https://media.themoviedb.org/t/p/w342/efNhiZPk71FTYJ30dBkWMfc939D.jpg" },
  { id: 7, title: "Blindado", image: "https://media.themoviedb.org/t/p/w342/tDGrzf1DNQFead0uMcKVjd3cAIU.jpg" },
  { id: 8, title: "Nosferatu", image: "https://media.themoviedb.org/t/p/w342/jivUhECegXI3OYtPVflWoIDtENt.jpg" },
  { id: 9, title: "Mazel Tov", image: "https://media.themoviedb.org/t/p/w342/j8EORyEJyVk7wSyUoy0bb4lVkuu.jpg" },
  { id: 10, title: "Forrest Gump", image: "https://media.themoviedb.org/t/p/w342/oiqKEhEfxl9knzWXvWecJKN3aj6.jpg" },
  { id: 11, title: "Interstellar", image: "https://media.themoviedb.org/t/p/w342/fbUwSqYIP0isCiJXey3staY3DNn.jpg" },
  { id: 12, title: "El Club de la Pelea", image: "https://media.themoviedb.org/t/p/w342/sgTAWJFaB2kBvdQxRGabYFiQqEK.jpg" },
];

const Home = ({ addToWatchlist, watchlist }) => (
  <section className="px-6 py-8">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight drop-shadow-lg">
      Películas
    </h2>
    <MovieList movies={movies} onAdd={addToWatchlist} watchlist={watchlist} />
  </section>
);

export default Home;


