import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Routes from "./Routes";
import { getPageTitle } from "../utils/utils";
import { localContextStart } from "../components/context/localContext";

function App() {

  useEffect(() => {
    localContextStart()
  }, [])

  return (
    <BrowserRouter>
      <div className="app">
        <AppContent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Navbar pageTitle={getPageTitle(location.pathname)} />
      <div className="content">
        <Routes />
      </div>
    </>
  );
}

export default App;
