//import logo from './logo.svg';
import React, {useState} from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

function App() {
  const [tab, setTab]= useState(3)
  return (
    <div className="App">
      <Header setTab={setTab}/>
      <Main tab={tab}/>
      <Footer/>
    </div>
  );
}

export default App;
