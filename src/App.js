import React from 'react';
import Navbar from "./components/Navigation/Main-Navigation/Navbar";
import SideNavbar from "./components/Navigation/SidebarNav/";
import Footer from "./components/Navigation/Footer";
import ContentWrapper from "./components/Layouts/ContentWrapper";
import LandingPage from "./pages/Home/";
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <main>
        <Navbar />
        <LandingPage />
        <Footer />
      </main>
    </div>
  );
}

export default App;