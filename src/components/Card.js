import { Link } from "react-router-dom";
import movieImg from "../assets/leon.jpg";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : movieImg;

  const shortOverview =
    overview.length > 180 ? overview.substring(0, 180) + "..." : overview;

  return (
    <div className="m-3 w-72 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg h-96 w-full object-cover"
          src={image}
          alt={original_title}
        />
      </Link>
      <div className="p-4 flex flex-col h-48">
        <Link to={`/movie/${id}`}>
          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="text-sm font-normal text-gray-700 dark:text-gray-400 mt-2 flex-1 overflow-hidden text-left">
          {shortOverview}
        </p>
      </div>
    </div>
  );
};
