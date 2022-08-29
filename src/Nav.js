import React from "react";
import "./stylesheet.css";

function Nav({ icon, query, setQuery }) {
  return (
    <nav className="navbar">
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="icon-button">{icon}</button>
      </form>
    </nav>
  );
}

export default Nav;
