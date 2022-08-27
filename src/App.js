// import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./stylesheet.css";
import CardList from "./CardList";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav icon={<FontAwesomeIcon icon={faSearch} />} />
      <h1 className="home-header">Featured Bundles</h1>
      <CardList />
    </div>
  );
}
export default App;
