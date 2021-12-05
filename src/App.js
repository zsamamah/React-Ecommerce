import { Routes as Switch, Route} from "react-router-dom";
import Checkout from "./Components/checkout";
import Shop from "./Components/Shop";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Cart from "./Components/Cart"
import Admin from "./pages/admin";
function App() {
  return (
    <div className="App">
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin" element={<Admin />} />
      </Switch>

    </div>
  );

}

export default App;