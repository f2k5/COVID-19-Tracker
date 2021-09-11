import React, {useState, useEffect} from "react";
import CountUp from "react-countup";
import CovidTextImage from "../images/CovidTextImage.png";
import axios from "axios";

const Worldwide = () => {

    const [worldWideCovid19Data, updateWorldwideCovid19Data] = useState("");
    const api = "https://corona.lmao.ninja/v3/covid-19/all";

    useEffect(() => {
        axios.get(api)
        .then(function(response) {
            updateWorldwideCovid19Data(response.data)
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }, []);

    var date = new Date(worldWideCovid19Data.updated).toString();

    return (
        <div className = "worldinfo-table">           
            <img className = "imageHeading" src = {CovidTextImage} alt="COVID-19"/>
            <h1 className = "section-heading" >Worldwide</h1>
            <h2 className = "worldinfo-latest-time">Last Updated: {date}</h2>
            <table className = "table-container">
                <tr>
                    <td>Cases</td>
                    <td>Active</td>
                    <td>Recovered</td>
                    <td>Recovered today</td>
                    <td>Critical</td>
                    <td>Deaths</td>
                    <td>Deaths today</td>
                </tr>

                <tr>
                    {worldWideCovid19Data.cases === 0 ? 
                        <td className = "statUnavailable">Stat unavailable</td> : 
                        <td><CountUp start={0} end={worldWideCovid19Data.cases} duration={2} separator="," /></td>}

                    {worldWideCovid19Data.active === 0 ? 
                        <td className = "statUnavailable">Stat unavailable</td> : 
                        <td><CountUp start={0} end={worldWideCovid19Data.active} duration={2} separator="," /></td>}

                    {worldWideCovid19Data.recovered === 0 ? 
                        <td className = "statUnavailable">Stat unavailable</td> : 
                        <td><CountUp start={0} end={worldWideCovid19Data.recovered} duration={2} separator="," /></td>}

                    {worldWideCovid19Data.todayRecovered === 0 ? 
                        <td className = "statUnavailable">Stat unavailable</td> : 
                        <td><CountUp start={0} end={worldWideCovid19Data.todayRecovered} duration={2} separator="," /></td>}

                    {worldWideCovid19Data.critical === 0 ? 
                        <td className = "statUnavailable">Stat unavailable</td> : 
                        <td><CountUp start={0} end={worldWideCovid19Data.critical} duration={2} separator="," /></td>}

                    {worldWideCovid19Data.deaths === 0 ? 
                        <td className = "statUnavailable">Stat unavailable</td> : 
                        <td><CountUp start={0} end={worldWideCovid19Data.deaths} duration={2} separator="," /></td>}

                    {worldWideCovid19Data.todayDeaths === 0 ? 
                        <td className = "statUnavailable">Stat unavailable</td> :
                        <td><CountUp start={0} end={worldWideCovid19Data.todayDeaths} duration={2} separator="," /></td>}
                </tr>
            </table>
            <br /> <br />
            <hr className = "line"></hr>
            <br /> <br />
        </div>
    );
}

export default Worldwide;