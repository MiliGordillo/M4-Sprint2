import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MovieCard = ({ movie, onAdd, watchlist }) => {
  const [added, setAdded] = useState(false);
  const isInWatchlist = watchlist.some(m => m.id === movie.id);

  const handleAdd = (movie) => {
    onAdd(movie);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <motion.div
      className="bg-[#181818] rounded-lg shadow hover:shadow-lg transition w-60 mx-auto font-[Geologica] relative text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
    >
      <img
        src={movie.image}
        alt={movie.title}
        className="rounded-t-lg h-80 w-full object-cover"
        style={{ aspectRatio: "2/3" }}
      />
      
      <AnimatePresence>
        {added && (
          <motion.div
            className="absolute top-0 left-0 w-full h-80 flex items-center justify-center z-10"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.4 }}
          >
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11" stroke="green" strokeWidth="2" fill="none"/>
              <path d="M8 12.5l3 3 5-5" stroke="green" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 truncate text-white" title={movie.title}>
          {movie.title}
        </h3>
        <div className="flex justify-center">
          <button
            className={`px-4 py-2 rounded focus:outline-4 focus:outline-yellow-400 ${
              isInWatchlist
                ? 'bg-gray-700 text-gray-400 cursor-default'
                : 'bg-yellow-500 hover:bg-yellow-600 text-black'
            }`}
            onClick={() => handleAdd(movie)}
            disabled={isInWatchlist}
          >
            {isInWatchlist ? 'Agregada' : 'Agregar a la lista'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieCard;


