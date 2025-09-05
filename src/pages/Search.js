import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerms =
    searchParams.get("query") || searchParams.get("search") || "";
  const { data: movies = [] } = useFetch(apiPath, queryTerms);

  useTitle(`Search result for ${queryTerms}`);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center w-full mx-auto">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
