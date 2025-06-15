import MovieCard from "./MovieCard";

const MovieList = ({ movies, onAdd, watchlist = [] }) => (
  <div className="w-full max-w-6xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 mt-4 font-sans leading-relaxed rounded-lg">
      {movies.map(movie => (
        <div key={movie.id} className="px-1 pb-4">
          <MovieCard
            movie={movie}
            onAdd={onAdd}
            watchlist={watchlist} 
          />
        </div>
      ))}
    </div>
  </div>
);

export default MovieList;

