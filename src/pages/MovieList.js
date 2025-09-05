import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies = [] } = useFetch(apiPath);
  useTitle(title);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
