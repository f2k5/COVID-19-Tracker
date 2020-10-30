import React, {useState, useEffect} from "react";
import axios from "axios";
import countries from "../countries";

function CountrySpecific () {
    const [country_covid19_data, update_country_covid19_data] = useState("");
    const [countryName, updateCountryName] = useState("");
    const [buttonPressed, updateButtonPress] = useState(false);

    function numberWithCommas(x) {
        if (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        }
    }

    function fetchName (event) {
        let userCountryName = event.target.value;
        userCountryName = userCountryName.charAt(0).toUpperCase() + userCountryName.slice(1, userCountryName.length).toLowerCase();
        updateCountryName(userCountryName);
        console.log(userCountryName);
        updateButtonPress(false);
    }

    function handleButton() {
        updateButtonPress(true);
    }

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries#")
        .then(function(response) {
            response.data.forEach((x, i) => {
                if (countryName === x.country) {
                    const data_received = response.data[i];
                    update_country_covid19_data(data_received);
                } 
            })           
        })
        .catch(function(error) {
            console.log(error);
        });
    }, [countryName]);

    var date = new Date(country_covid19_data.updated).toString();

    return (
        <div className = "country-info-display">
            <input class = "input-box" type="text" placeholder="Search for a country" onChange={fetchName} value={countryName}></input>
            <button class = "input-box" onClick = {handleButton}>Submit</button>
            {(buttonPressed && countries.includes(countryName)) ?

            <div className = "worldinfo-table">
                
                <h1 className = "section-heading">{country_covid19_data.country} ({country_covid19_data.continent})</h1>
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
                        <td>{numberWithCommas(country_covid19_data.cases)}</td>
                        <td>{numberWithCommas(country_covid19_data.active)}</td>
                        <td>{numberWithCommas(country_covid19_data.recovered)}</td>
                        <td>{numberWithCommas(country_covid19_data.todayRecovered)}</td>
                        <td>{numberWithCommas(country_covid19_data.critical)}</td>
                        <td>{numberWithCommas(country_covid19_data.deaths)}</td>
                        <td>{numberWithCommas(country_covid19_data.todayDeaths)}</td>
                    </tr>
                </table>
            </div>
            :
            <h1 className = "warning">Please make sure you enter the country name correctly.</h1>}
        </div>
    );
}

export default CountrySpecific;