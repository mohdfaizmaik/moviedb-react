import React from 'react';
import Header from './components/Header';//Components
import Home from './components/Home';
import {GlobalStyle} from './GlobalStyle'; //style

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
     <GlobalStyle />
    </div>
  );
}

export default App;
