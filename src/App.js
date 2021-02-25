import { Widgets } from "@material-ui/icons";
import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";


function App() {
  return (   
  //BEM NAMING CONVENTION
    <div className="app">
   <h1> Facebook clone</h1>
    <Header />

    <div className="app__body">
    <Sidebar/>
    <Feed />
              {/*Widgets*/}
    </div>
   </div>
  );
}

export default App;
