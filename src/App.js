import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Checkout from "./Components/checkout";
import Footer from "./Components/Footer";
import Shop from "./Components/Shop";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Cart from "./Components/Cart"
import Admin from "./pages/admin";
import Slider from "./Components/Slider";
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