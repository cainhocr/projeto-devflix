import { useEffect, useState } from "react";
import logo from "../assets/devflix.png";
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
        <div className="logo">
          <img src={logo} alt="logo devflix" />
        </div>
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handlekeypress}
            type="text"
            placeholder="Pesquise por filmes"
          />
          <img
            src={searchicon}
            alt="Icone de pesquisa"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movies={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>nenhum filme encontrado 🤦‍♂️</h2>
          </div>
        )}
        
        <Footer link={"https:github.com.br"}>Cr_Cr_Zn</Footer>
      </div>
    </>
  );
};
export default App;
