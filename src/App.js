import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar.js";
import Widgets from "./Widgets";
import {useStateValue} from "./StateProvider";

//BEM NAMING CONVENTION
function App() {
    const [{user}, dispatch] = useStateValue();
    // Login Push User into Data Layer *React Context API
    // Access User in every component
    return (
        <div className="app">
            {!user ? (
                <Login/>
            ) : (
                <>
                    <Header/>
                    <div className="app__body">
                        <Sidebar/>
                        <Feed/>
                        <Widgets/>
                    </div>
                </>
            )}
        </div>
    );
}

export default App;

