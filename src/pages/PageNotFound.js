import pageNotFound from "../assets/pagenotfound.png";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page not found!");
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <div className="max-w-lg ">
            <img
              className="rounded"
              src={pageNotFound}
              alt="404 Page not found!"
            ></img>
          </div>
        </div>
      </section>
    </main>
  );
};
