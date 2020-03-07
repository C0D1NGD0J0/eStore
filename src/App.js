import React, {useState} from 'react';
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
import UserOrder from "./containers/User/UserOrder";
import Auth from "./pages/Auth/";
import './sass/main.scss';

function App() {
  const [openSidenav, toggleSidenav] = useState(false);
  
  let handleClick = (evt) => {
    let isOpen = document.getElementsByClassName("sidebarVisible").length > 0;
    return isOpen ? toggleSidenav(!openSidenav) : null;
  }

  let _toggleSidenav = () =>{
    toggleSidenav(!openSidenav);
  }

  return (
    <Router>
      <SideNavbar isOpen={openSidenav} toggleSidebar={_toggleSidenav}/>
      <main onClick={handleClick}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/products/:productId" component={SingleProduct} />
          <Route exact path="/wishlist" component={WishList} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/myaccount" component={UserAccount} />
          <Route exact path="/myaccount/settings" component={UserAccountSetting} />
          <Route exact path="/myaccount/wishlist" component={UserWishList} />
          <Route exact path="/myaccount/orders/:orderId" component={UserOrder} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;