import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerms =
    searchParams.get("query") || searchParams.get("search") || "";
  const { data: movies = [] } = useFetch(apiPath, queryTerms);
  console.log("queryTerms:", queryTerms);
  console.log("movies:", movies);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
