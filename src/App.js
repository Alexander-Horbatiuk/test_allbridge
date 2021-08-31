import  './App.css';
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ExchangerMenu from "./containersMenu";


function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <header className="App_header">
                  <img src="https://app.allbridge.io/assets/allbridge.svg" className="App-logo" alt="logo" />
              </header>
              <main className="main">
                  <Switch>
                      <ExchangerMenu />
                  </Switch>
              </main>
          </div>
      </BrowserRouter>

  );
}

export default App;
