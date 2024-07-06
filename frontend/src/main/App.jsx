import './App.css'
import React from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Routes from './Routes'
import { getPageTitle } from '../utils/utils'

function App() {
  return (
    <BrowserRouter>
        <div className='app'>
          <AppContent />
        </div>
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation();
  return (
    <>
      <Navbar pageTitle={getPageTitle(location.pathname)} />
      <Routes />
    </>
  );
}

export default App