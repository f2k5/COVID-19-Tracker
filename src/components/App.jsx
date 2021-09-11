import React from "react";
import "../index.css";
import Worldwide from "./Worldwide";
import CountrySpecific from "./CountrySpecific";
import Copyright from "./Copyright";

function App (){
    return (
        <div>
            <Worldwide />
            <CountrySpecific />
            <footer>
                <Copyright />
            </footer>
        </div>
    )
}

export default App;