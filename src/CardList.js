import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./stylesheet.css";

function CardList({ query }) {
  const [bundles, setBundles] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    getBundles();
    console.log(query);
  }, []);
  const getBundles = async () => {
    const response = await fetch("https://fortnite-api.com/v2/shop/br");
    const data = await response.json();
    setBundles(data.data.featured.entries);
    console.log("bundles", bundles);
    console.log("data", data);
    setLoaded(true);
  };
  console.log(query);
  return (
    <div className="grid-display">
      {!loaded ? (
        <h1>loading...</h1>
      ) : (
        bundles
          .filter((bundle) => bundle.devName.toLowerCase().includes(query))
          .map((bundle) => (
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
