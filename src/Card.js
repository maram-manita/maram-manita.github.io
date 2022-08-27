import React, { useState, useEffect } from "react"; //don't forget to import usecontext

function Card(props) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(props.items);
  }, [props.items]);
  const rarityStyle = (rarity) => {
    switch (rarity) {
      case "legendary":
        return " legendary";
        break;
      case "epic":
        return " epic";
        break;
      case "rare":
        return " rare";
        break;
      case "uncommon":
        return " uncommon";
        break;

      default:
        break;
    }
  };

  return (
    <div className="card">
      <div className="bundle-desc">
        <h3>{props.devName}</h3>
        <span className="bundle-price">{props.finalPrice}</span>
        <span className="coin">C</span>
      </div>
      {props.items.map((item) => (
        <div className="item-row" key={item.id}>
          <img className="item-img" src={item.images.icon} />
          <div className="item-desc">
            <span className="item-name">{item.name}</span>
            <span className={"item-rarity" + rarityStyle(item.rarity.value)}>
              {item.rarity.value}
            </span>
            <span>{item.description}</span>
            <hr></hr>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
