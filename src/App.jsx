import { useState, useEffect } from "react";
import Home from "./pages/Home";
import WatchlistModal from "./components/WatchlistModal";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const movies = [];

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  const addToWatchlist = (movie) => {
    const exists = watchlist.find(m => m.id === movie.id);
    if (exists) return;
    const updated = [...watchlist, movie];
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  const removeFromWatchlist = (id) => {
    const updated = watchlist.filter(m => m.id !== id);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div className="bg-black-100 min-h-screen">
      <Header onOpenWatchlist={() => setIsModalOpen(true)} />
      <Home addToWatchlist={addToWatchlist} watchlist={watchlist} />
      <MovieList
        movies={movies}
        onAdd={addToWatchlist} // Usa solo esta función
        watchlist={watchlist}
      />
      {isModalOpen && (
        <WatchlistModal
          watchlist={watchlist}
          onClose={() => setIsModalOpen(false)}
          removeFromWatchlist={removeFromWatchlist}
        />
      )}
    </div>
  );
}

export default App;


