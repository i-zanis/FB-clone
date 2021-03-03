import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";

//BEM NAMING CONVENTION
function App() {
    return (
        <div className="app">
            <h1> Facebook clone</h1>
            <Header/>

            <div className="app__body">
                <Sidebar/>
                <Feed/>
                {/*Widgets*/}
            </div>
        </div>
    );
}

export default App;
