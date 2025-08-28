import "./App.css";
import { Card, Header, Footer } from "./components";
import { MovieDetail, MovieList, PageNotFound, Search } from "./pages";
import { AllRoutes } from "./routes/AllRoutes";
function App() {
  return (
    <div className="App">
      <center>
        <Header />
        <AllRoutes />
        <h3>Hello world!</h3>
        <Footer />
      </center>
    </div>
  );
}

export default App;
