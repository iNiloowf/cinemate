import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerms =
    searchParams.get("query") || searchParams.get("search") || "";
  const { data: movies = [] } = useFetch(apiPath, queryTerms);
  console.log("queryTerms:", queryTerms);
  console.log("movies:", movies);
  useTitle(`Search result for ${queryTerms}`);
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
