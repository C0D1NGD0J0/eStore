import React, {useState, useEffect} from 'react';
import { Provider } from "react-redux";
import ReduxStore from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navigation/Main-Navigation/Navbar";
import SideNavbar from "./components/Navigation/SidebarNav/";
import Footer from "./components/Navigation/Footer";
import LandingPage from "./pages/Home/";
import SingleProduct from "./pages/Product/";
import Store from "./pages/Store/";
import WishList from "./pages/Wishlist";
import Cart from "./pages/Cart/";
import UserAccount from "./containers/User";
import UserAccountSetting from "./containers/User/AccountSettings/";
import UserWishList from "./containers/User/Wishlist/";
import Notification from "./components/Notification";
import UserOrder from "./containers/User/UserOrder";
import Auth from "./pages/Auth/";
import AccountActivation from "./pages/Auth/accountActivation";
import { getCurrentuser } from "./actions/auth";
import { setAuthHeaderToken } from "./config/";
import './sass/main.scss';

if (localStorage.token) {
  setAuthHeaderToken(localStorage.token);
};

function App() {
  useEffect(() => {
    ReduxStore.dispatch(getCurrentuser());
  }, []);

  return (
    <Provider store={ReduxStore}>
      <Router>
        <SideNavbar />
        <main>
          <Navbar />
          <Notification />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/store" component={Store} />
            <Route exact path="/products/:productId" component={SingleProduct} />
            <Route exact path="/wishlist" component={WishList} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/account_activation/:token" component={AccountActivation} />
            <Route exact path="/myaccount" component={UserAccount} />
            <Route exact path="/myaccount/settings" component={UserAccountSetting} />
            <Route exact path="/myaccount/wishlist" component={UserWishList} />
            <Route exact path="/myaccount/orders/:orderId" component={UserOrder} />
          </Switch>
          <Footer />
        </main>
      </Router>
    </Provider>
  );
}

export default App;