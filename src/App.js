import React from "react";
import logo from "./logo.png";

import "./App.css";
import WorldClock from "./WorldClock";


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <WorldClock clockData={["Asia/Singapore", "Asia/Kolkata", "Europe/London", "US/Pacific"]} />
                </header>
            </div>
        );
    }
}

export default App;
