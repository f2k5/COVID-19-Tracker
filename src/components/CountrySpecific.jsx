import React, {useState, useEffect} from "react";
import axios from "axios";
import CountUp from "react-countup";

const CountrySpecific = () => {
    const [countryCovid19Ddata, updateCountryCovid19Data] = useState("");
    const [api, updateAPI] = useState("");
    const [countryName, updateCountryName] = useState("");
    const [buttonPressed, updateButtonPress] = useState(false);
    const [invalidCountry, updateInvalidCountry] = useState(false);

    const combineUserInputCountryAndAPI = (userInputCountry) => {
        userInputCountry = userInputCountry.split("");
        for (let i = 0; i < userInputCountry.length; i++) {
            if (userInputCountry[i] === " ") {
                userInputCountry[i] = "%20";
            }
        }
        userInputCountry = userInputCountry.join("");
        return userInputCountry;
    }

    const fetchName = (event) => {
        let userCountryName = event.target.value;
        let countryNameToBeConcatenatedWithAPI = "";
        if (userCountryName.split(" ").length > 1) {
            countryNameToBeConcatenatedWithAPI = combineUserInputCountryAndAPI(userCountryName);
        } else {
            countryNameToBeConcatenatedWithAPI = userCountryName;
        }
        updateAPI("https://disease.sh/v3/covid-19/countries/"+countryNameToBeConcatenatedWithAPI);
        updateCountryName(userCountryName);
        console.log(userCountryName);
        updateButtonPress(false);
    }

    const handleButton = () => {
        updateButtonPress(true);
        updateCountryName("");
        updateCountryCovid19Data("");
    }

    useEffect(() => {
        axios.get(api)
        .then(response => {
            return (
            // response.data === undefined ? updateCountryCovid19Data("null") :
            updateInvalidCountry(false),
            updateCountryCovid19Data(response.data))
        })
        .catch(error => {
            updateInvalidCountry(true);
            console.log(error);
        });
    }, [buttonPressed, api]);

    var date = new Date(countryCovid19Ddata.updated).toString();

    return (
        <div className = "country-info-display">
            <input class = "input-box" type="text" placeholder="Search for a country" onChange={fetchName} value={countryName}></input>
            <button class = "input-box" onClick = {handleButton}>Submit</button>

            {buttonPressed ?

                invalidCountry === true ? <p><span style = {{color: "red"}}>Oops</span>! No such country found.</p> :

                <div className = "worldinfo-table">
                    <h1 className = "section-heading">{countryCovid19Ddata.country} ({countryCovid19Ddata.continent})</h1>
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
                            {countryCovid19Ddata.cases === 0 ? 
                                <td>0</td> : 
                                <td><CountUp start={0} end={countryCovid19Ddata.cases} duration={2} separator="," /></td>}

                            {countryCovid19Ddata.active === 0 ? 
                                <td>0</td> : 
                                <td><CountUp start={0} end={countryCovid19Ddata.active} duration={2} separator="," /></td>}

                            {countryCovid19Ddata.recovered === 0 ? 
                                <td>0</td> : 
                                <td><CountUp start={0} end={countryCovid19Ddata.recovered} duration={2} separator="," /></td>}

                            {countryCovid19Ddata.todayRecovered === 0 ? 
                                <td>0</td> : 
                                <td><CountUp start={0} end={countryCovid19Ddata.todayRecovered} duration={2} separator="," /></td>}

                            {countryCovid19Ddata.critical === 0 ? 
                                <td>0</td> : 
                                <td><CountUp start={0} end={countryCovid19Ddata.critical} duration={2} separator="," /></td>}

                            {countryCovid19Ddata.deaths === 0 ? 
                                <td>0</td> : 
                                <td><CountUp start={0} end={countryCovid19Ddata.deaths} duration={2} separator="," /></td>}

                            {countryCovid19Ddata.todayDeaths === 0 ? 
                                <td>0</td> : 
                                <td><CountUp start={0} end={countryCovid19Ddata.todayDeaths} duration={2} separator="," /></td>}
                        </tr>
                    </table>
                </div>
            :
            <h1 className = "warning">Please make sure you enter the country name correctly.</h1>}
        </div>
    );
}

export default CountrySpecific;