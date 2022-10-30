import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import SideBar from "../components/SideBar";

function Home() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('/api/items')
      const json = await response.json()

      if (response.ok) {
        setItems(json)
      }
      // console.log(items);
    }

    fetchItems()
  }, [])

  const [cart, setCart] = useState([])

  return (
    <div className="main">
      <div className="side-bar-container">
        <SideBar items={items} setItems={setItems}/>
      </div>

      <div className="home-page">
        {items.map((item, i) => {
          while (i < 15) {
            return (
              <div key={item._id} >
                <Item item={item} cart={cart} setCart={setCart} />
              </div>

            )
          }
        })}
      </div>
    </div>
  );
}

export default Home;
