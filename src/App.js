import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Sidebar from "./components/Sidebar/Sidebar";
import "./index.css";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <Header />
        <Body />
      </div>
    </div>
  );
}

export default App;
