import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";
import "./stylesheet.css";

function AddCard(props) {
  const timestamp = Date.now();
  const [appear, setAppear] = useState(props.appearState);
  const [movies, setMovies] = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [dir, setDir] = useState("");

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };
  const updateYear = (e) => {
    setYear(e.target.value);
  };
  const updateDir = (e) => {
    setDir(e.target.value);
  };
  const addMovie = (e) => {
    e.preventDefault(); //prevents the page from refreshing when e is updated
    if (title === "" || year === "" || dir === "") return;

    setMovies((prevMovies) => [
      ...prevMovies,
      { title: title, year: year, director: dir, id: timestamp },
    ]);
    console.log(appear);
  };

  return (
    <div className="card no-hover">
      <h3>Add Movie</h3>
      <p>#{movies.length + 1}</p>
      <form onSubmit={addMovie}>
        <input
          type="text"
          name="title"
          placeholder="movie title"
          value={title}
          onChange={updateTitle}
        />
        <input
          type="text"
          name="year"
          placeholder="release year"
          value={year}
          onChange={updateYear}
        />
        <input
          type="text"
          name="director"
          placeholder="director"
          value={dir}
          onChange={updateDir}
        />
        <button onClick={() => setAppear(!appear)}>+</button>
      </form>
    </div>
  );
}

export default AddCard;
