import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleItem({ cart, setCart }) {
  let { id } = useParams()

  const [item, setItem] = useState("")

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`/api/items/${id}`)
      const json = await response.json()

      console.log(json);
      setItem(json)
    }

    fetchItem()
  }, [])

  const handleClick = () => {
    setCart(cart => [...cart, item])
  }

  return (
    <div className="single-item">
      <h1>{item.name}</h1>
      <h4>${item.price}</h4>
      <img src={item.img} alt="item" />
      <h4>{item.description}</h4>
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  )
}

export default SingleItem;
