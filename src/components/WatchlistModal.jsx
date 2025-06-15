import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WatchlistModal = ({ watchlist, onClose, removeFromWatchlist, isOpen = true }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-[#181f2a] to-[#232c3b] rounded-2xl shadow-2xl w-full max-w-md px-8 py-8 text-white flex flex-col items-center"
            initial={{ scale: 0.92, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="flex flex-col items-center mb-6 w-full">
              <span className="bg-yellow-400 rounded-full p-2 mb-2 shadow">
                <i className="bi bi-film text-2xl text-black"></i>
              </span>
              <h2 className="text-2xl text-white text-center font-['Abril_Fatface',cursive] tracking-tight drop-shadow-lg">
                Mi Lista de Películas
              </h2>
            </div>
            {/* Lista o mensaje vacío */}
            {watchlist.length === 0 ? (
              <div className="flex flex-col items-center py-12">
                <i className="bi bi-clipboard2-film text-5xl text-gray-400 mb-4"></i>
                <p className="text-lg text-gray-300 font-semibold mb-1 text-center">
                  Tu lista está vacía
                </p>
                <p className="text-gray-400 text-center">
                  ¡Agrega películas para comenzar!
                </p>
              </div>
            ) : (
              <div className="relative w-full">
                <div className="bg-[#1a2233] rounded-xl shadow-inner p-2">
                  <ul
                    className={`divide-y divide-gray-700 text-white pr-2 ${
                      watchlist.length > 5 ? "max-h-60 overflow-y-auto" : ""
                    }`}
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    {watchlist.map((movie) => (
                      <li
                        key={movie.id}
                        className="flex justify-between items-center py-2 px-2 hover:bg-[#232c3b] rounded transition"
                      >
                        <span className="text-gray-200">{movie.title}</span>
                        <button
                          className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold px-4 py-1 rounded-lg shadow transition focus:outline-4 focus:outline-red-400"
                          onClick={() => removeFromWatchlist(movie.id)}
                        >
                          Eliminar
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                {watchlist.length > 5 && (
                  <div className="pointer-events-none absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#1a2233] to-transparent rounded-b-xl" />
                )}
              </div>
            )}
            <style>
              {`
                ul::-webkit-scrollbar {
                  display: none;
                }
              `}
            </style>
            <button
              className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition px-8 py-3 rounded-full text-black font-semibold flex items-center gap-2 shadow-lg focus:outline-4 focus:outline-yellow-400 text-lg mx-auto"
              onClick={onClose}
            >
              Cerrar
              <i className="bi bi-x-lg text-xl"></i>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WatchlistModal;

