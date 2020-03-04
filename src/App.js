import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navigation/Main-Navigation/Navbar";
import SideNavbar from "./components/Navigation/SidebarNav/";
import Footer from "./components/Navigation/Footer";
import LandingPage from "./pages/Home/";
import SingleProduct from "./pages/Product/";
import Store from "./pages/Store/";
import './sass/main.scss';

function App() {
  return (
    <Router>
      <SideNavbar />
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/products/:1" component={SingleProduct} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}

export default App;