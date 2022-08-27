import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Card from "./Card";
import "./stylesheet.css";

function CardList() {
  const [bundles, setBundles] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getBundles();
  }, []);
  const getBundles = async () => {
    const response = await fetch("https://fortnite-api.com/v2/shop/br");
    const data = await response.json();
    setBundles(data.data.featured.entries);
    console.log("bundles", bundles);
    setLoaded(true);
  };
  return (
    <div className="grid-display">
      {!loaded ? (
        <h1>loading...</h1>
      ) : (
        bundles.map((bundle) => (
          <Card
            key={bundle.offerId}
            items={bundle.items}
            devName={bundle.devName}
            finalPrice={bundle.finalPrice}
          />
        ))
      )}
    </div>
  );
}

export default CardList;
{
  /* <Card
devName={bundle.devName}
finalPrice={bundle.finalPrice}
items={bundle.items}
/> */
}
