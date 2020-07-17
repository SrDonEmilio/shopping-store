import React from "react";
import Header from "./components/header/Header";
import Routes from "./Routes";

import "./App.scss";

export default function App() {
  
  return (
    <div className="App">
        <Header />
        <Routes />
    </div>
  );
}
