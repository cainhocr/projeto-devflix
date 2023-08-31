import { useEffect, useState } from "react";
import logo from "../assets/devflixpgpc 2.png";
import searchicon from "../assets/search.svg";

import "./App.css";
import MovieCard from "../componentes/movieCard/movieCard";
import Footer from "../componentes/footer/footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const apikey = "676ed46e";
  const apiurl = `https://omdbapi.com/?apikey=${apikey}`;

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiurl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };

  const handlekeypress = (e) => {
    e === "Enter" && searchMovies(searchTerm);
    searchMovies(searchTerm);
  };

  return (
    <>
      <div id="app">
        <div className="cabecalho">
          <div className="logo">
            <img src={logo} alt="logo devflix" />
          </div>
          <div className="linkMenu">
            <ul>
              <li>
                <a href="#">inicio</a>
              </li>
              <li>
                <a href="#">Filmes</a>
              </li>
              <li>
                <a href="#">Séries</a>
              </li>
            </ul>
          </div>
          <div className="search">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handlekeypress}
              type="text"
            />
            <ion-icon
              name="search-outline"
              size="large"
              onClick={() => searchMovies(searchTerm)}
            ></ion-icon>
          </div>
        </div>
        <div className="h1tprt">
          <h1>Filmes de comédia</h1>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            <section className="ow">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movies={movie} />
              ))}
            </section>
          </div>
        ) : (
          <div className="empty">
            <h2>nenhum filme encontrado 🤦‍♂️</h2>
          </div>
        )}
        <div className="h1tprt">
          <h1>Filmes de Ação</h1>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            <section className="ow">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movies={movie} />
              ))}
            </section>
          </div>
        ) : (
          <div className="empty">
          </div>
        )}

        <div className="h1tprt">
          <h1>Em Alta</h1>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            <section className="ow">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movies={movie} />
              ))}
            </section>
          </div>
        ) : (
          <div className="empty">
          </div>
        )}
        <div id="footerMaster">
          <Footer link={"https:github.com.br"}>Cr_Cr_Zn</Footer>
        </div>
      </div>
    </>
  );
};
export default App;
