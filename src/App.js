import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/checkout";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">

      {/* <Navbar /> */}
        <Switch>
          <Route path="/" element={<Home />} />
            <Route path="/account" element={<Login/>} />
            <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />

        </Switch>

      <Footer />

    </div>
  );

}

export default App;