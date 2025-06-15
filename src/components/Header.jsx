import { motion } from "framer-motion";

const Header = ({ onOpenWatchlist }) => (
  <header className="bg-gradient-to-r from-black via-gray-900 to-black px-6 py-5 flex justify-between items-center shadow-lg font-sans leading-relaxed">
    <div className="flex items-center gap-4">
      <img
        src="https://cdn-icons-png.freepik.com/256/2809/2809590.png?semt=ais_hybrid"
        alt="Logo"
        className="w-12 h-12 rounded-full shadow-md border-2 border-yellow-400 bg-black"
      />
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-yellow-400 drop-shadow-lg font-['Abril_Fatface',cursive] animate-pulse">
        Mi Watchlist
      </h1>
    </div>
    <motion.button
      className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition px-6 py-2 rounded-full text-black font-semibold flex items-center gap-2 shadow-lg focus:outline-4 focus:outline-yellow-400"
      onClick={onOpenWatchlist}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      Ver mi lista
      <span className="ml-1">
        <i className="bi bi-list text-xl"></i>
      </span>
    </motion.button>
  </header>
);

export default Header;

