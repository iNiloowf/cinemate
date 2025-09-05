import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieImage from "../assets/leon.jpg";
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : movieImage;

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const json = await response.json();
      setMovie(json);
    }
    fetchMovie();
  }, [params.id]);

  useTitle(movie.title);

  return (
    <>
      <section className="flex flex-col md:flex-row justify-center md:justify-start items-start gap-6 max-w-6xl mx-auto py-8 px-4">
        <div className="flex-shrink-0 w-full md:w-1/3 rounded-lg overflow-hidden shadow-xl">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt={movie.title}
          />
        </div>

        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              {movie.title}
            </h1>
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
              {movie.overview}
            </p>

            {movie.genres && (
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full text-xs md:text-sm bg-gray-100 dark:bg-gray-700"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-1">
                <svg
                  className="w-4 h-4 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <span className="font-semibold text-gray-900 dark:text-white">
                  {movie.vote_average || "N/A"}
                </span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span className="text-gray-700 dark:text-gray-300">
                  {movie.vote_count || 0} reviews
                </span>
              </div>
            </div>
          </div>
          <div className="bg-blue-700 dark:bg-gray-800 rounded-xl shadow-inner p-4 grid grid-cols-1 gap-1 text-xs text-white">
            <p className="text-sm">
              <span className="font-semibold">Run time:</span> {movie.runtime}{" "}
              min
            </p>
            <p className="text-sm">
              <span className="font-semibold">Budget:</span> ${movie.budget}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Revenue:</span> ${movie.revenue}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Release Date:</span>{" "}
              {movie.release_date}
            </p>
            <p className="text-sm">
              <span className="font-semibold">IMDB:</span>{" "}
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noreferrer"
                className="underline text-white"
              >
                {movie.imdb_id}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
