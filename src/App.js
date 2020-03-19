import React, {useState, useEffect} from 'react';
import { Provider } from "react-redux";
import ReduxStore from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navigation/Main-Navigation/Navbar";
import SideNavbar from "./components/Navigation/SidebarNav/";
import Footer from "./components/Navigation/Footer";
import LandingPage from "./pages/Home/";
import NotFoundPage from "./components/Layouts/404";
import SingleProduct from "./pages/Product/";
import Store from "./pages/Store/";
import WishList from "./pages/Wishlist";
import Cart from "./pages/Cart/";
import UserAccount from "./containers/User";
import UserAccountSetting from "./containers/User/AccountSettings/";
import UserWishList from "./containers/User/Wishlist/";
import Notification from "./components/Notification";
import UserOrder from "./containers/User/UserOrder";
import ScrollToTop from "./utils/ScrollToTop";
import Auth from "./pages/Auth/";
import AccountActivation from "./pages/Auth/accountActivation";
import RecoverPassword from "./pages/Auth/recoverPassword";
import ResetPassword from "./pages/Auth/resetPassword";
import { getCurrentuser } from "./actions/auth";
import { setAuthHeaderToken, validateTokenState } from "./config/";
import PrivateRoute from "./config/PrivateRoute";
import './sass/main.scss';

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      ReduxStore.dispatch(getCurrentuser(()=> setPageLoaded(!pageLoaded)));
    } else {
      setPageLoaded(!pageLoaded);
    };
    validateTokenState(ReduxStore);
    setAuthHeaderToken(localStorage.getItem('token'));
  }, []);


  if(!pageLoaded){
    return <div>loading ...</div>
  }

  return (
    <Provider store={ReduxStore}>
      <Router>
        <SideNavbar />
        <main>
          <ScrollToTop>
            <Navbar />
            <Notification />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/store/cat/:category" component={Store} />
              <Route exact path="/products/:productId" component={SingleProduct} />
              <Route exact path="/wishlist" component={WishList} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/auth" component={Auth} />
              <Route exact path="/auth/recoverpassword" component={RecoverPassword} />
              <Route exact path="/auth/reset_password/:token" component={ResetPassword} />
              <Route exact path="/auth/account_activation/:token" component={AccountActivation} />
              <PrivateRoute exact path="/myaccount" component={UserAccount} />
              <PrivateRoute exact path="/myaccount/settings" component={UserAccountSetting} />
              <PrivateRoute exact path="/myaccount/wishlist" component={UserWishList} />
              <PrivateRoute exact path="/myaccount/orders/:orderId" component={UserOrder} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer />
          </ScrollToTop>
        </main>
      </Router>
    </Provider>
  );
}

export default App;