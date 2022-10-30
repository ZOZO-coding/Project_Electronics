import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./pages/ShoppingCart";
import SingleItem from "./pages/SingleItem";
import About from "./pages/About"
import DisplayCart from "./components/DisplayCart";
import AddItem from "./components/AddItem"
import UsedItems from "./pages/UsedItems"
import AuthPage from './pages/AuthPage.jsx';
import { getUser } from './utilities/users-service'
import Footer from "./components/Footer";

function App() {
  // Create a variable to hold the state of our component
  const [user, setUser] = useState(getUser());

  console.log(user);

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      {user ? (
        <>
          <Router>
            <NavBar />
            <DisplayCart cart={cart} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shoppingCart" element={<ShoppingCart cart={cart} setCart={setCart} />} />
              <Route path='/:id' element={<SingleItem cart={cart} setCart={setCart} />} />
              <Route path="/about" element={<About />} />
              <Route path='/add' element={<AddItem />} />
              <Route path='/used' element={<UsedItems />} />
            </Routes>
            <Footer />
          </Router>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </div>
  );
}

export default App;