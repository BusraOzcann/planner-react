import './App.scss';
import Header from './components/header/Header'
import Plan from './pages/Plan/Plan'

import React from "react"

import {
  Experimental_CssVarsProvider as CssVarsProvider,
} from '@mui/material/styles';


function App() {
  return (
    <div className="container">
      {/* MATERIAL UI COLOR SCHEME  */}
      <CssVarsProvider>
        <Header />
        <Plan />
      </CssVarsProvider>
    </div>
  );
}

export default App;
