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
import Hero from "./Components/Hero";
import UsersContainer from "./Components/usersContainer";
import Submitted from "./Components/Submitted";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: JSON.parse(localStorage.getItem("logged_in")),
    };
  }

  handleChangeRole = () => {
    this.setState({
      isLoggedIn: JSON.parse(localStorage.getItem("logged_in")),
    });
  };

  render() {
    // if (this.state.isLoggedIn != null)
    //   if (this.state.isLoggedIn.role === "admin")
    //     return (
    //       <>
    //         <NavBarAdmin handleChangeRole={this.handleChangeRole} />
    //         <Switch>
    //           <Route
    //             to="/"
    //             element={<AddField handleFormSubmit={this.handleFormSubmit} />}
    //           />
    //           <Route path="/users" element={<UsersContainer />} />
    //           <Route path="/orders" element={<Submitted />} />
    //           {/* <Route path="*" element={<NotFound />} /> */}
    //         </Switch>
    //       </>
    //     );
        return (
          <>
            <Navbar loggedIn={this.state.isLoggedIn}/>
            <Switch>
            <Route
                path="/products"
                element={<AddField />}
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
          </>
        );
  }
}

export default App;
