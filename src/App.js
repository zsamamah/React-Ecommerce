import { Routes as Switch, Route } from "react-router-dom";
import Checkout from "./Components/checkout";
import Shop from "./Components/Shop";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import React from "react";
import AddField from "./Components/addField";
import NotFound from "./Components/notfound";
import UsersContainer from "./Components/usersContainer";
import Submitted from "./Components/Submitted";
import Navbar from "./Navbar";
import Footer from "./Components/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: JSON.parse(localStorage.getItem("logged_in")),
      items: JSON.parse(localStorage.getItem("items")),
    };
  }
  handleChangeitem=()=>{
    this.setState({items:JSON.parse(localStorage.getItem('items'))})
  }

  handleChangeRole = () => {
    this.setState({
      isLoggedIn: JSON.parse(localStorage.getItem("logged_in")),
    });
  };
  deleteCard = (index1) => {
    this.deleted = JSON.parse(localStorage.getItem("items"));
    this.deleted.splice(index1, 1);
    localStorage.setItem("items", JSON.stringify(this.deleted));
    this.setState({
      items: JSON.parse(localStorage.getItem("items")),
    });
  };

  render() {
        return (
          <>
            <Navbar loggedIn={this.state.isLoggedIn}/>
            <Switch>
            <Route
                path="/products"
                element={<AddField items={this.state.items} deleteCard={this.deleteCard} handleChangeitem={this.handleChangeitem}/>}
              />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/orders" element={<Submitted />} />
              <Route path="/" element={<Home />} />
              <Route
                path="/account"
                element={<Login handleChangeRole={this.handleChangeRole} />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="*" element={<NotFound />} />
            </Switch>
            <Footer/>
          </>
        );
  }
}

export default App;
