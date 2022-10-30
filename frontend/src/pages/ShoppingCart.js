import React from "react";

function ShoppingCart({ cart, setCart }) {

  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  return (
    <div className="shopping-cart">
      {cart && cart.map((item) => (
        <div key={item._id}>
          <img src={item.img} alt="" />
          <div>{item.name} x 1 <span onClick={() => handleDelete(item._id)} class="material-symbols-outlined">delete</span></div>
        </div>
        
      ))}
    </div>
  );
}

export default ShoppingCart;
