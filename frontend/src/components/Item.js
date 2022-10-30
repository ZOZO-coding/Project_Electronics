import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Item({ item }) {

  return (
    <div className='home-item'>
      <div className="item-text">
        <Link to={'/' + item._id} className="link">
          <h3>{item.name}</h3>
        </Link>
        <div>${item.price}</div>
        <div>{item.category}</div>
      </div>

      <img src={item.img} alt="picture"></img>
    </div>
  );
}

export default Item;
