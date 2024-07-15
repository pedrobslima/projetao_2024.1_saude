import "./App.css";
import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { MainProvider } from "../components/Context/MainContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Routes from "./Routes";
import { getPageTitle } from "../utils/utils";

function App() {
  return (
    <BrowserRouter>
      <MainProvider>
        <div className="app">
          <AppContent />
          <Footer />
        </div>
      </MainProvider>
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
