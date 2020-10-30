import React from "react";
import "../index.css";
import Worldwide from "./Worldwide";
import CountrySpecific from "./CountrySpecific";
import Copyright from "./Copyright";

function App (){
    return (
        <div>
            <h1 className = "heading">COVID-19 Tracker</h1>
            <Worldwide />
            <CountrySpecific />
            <footer>
                <Copyright />
            </footer>
        </div>
    )
}

export default App;