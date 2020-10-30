import React, {useState, useEffect} from "react";
import axios from "axios";

function Worldwide () {

    const [worldwide_covid19_data, update_worldwide_covid19_data] = useState("");

    function numberWithCommas(x) {
        if (x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
        }
    }

    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v3/covid-19/all")
        .then(function(response) {
            update_worldwide_covid19_data(response.data)
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }, []);

    var date = new Date(worldwide_covid19_data.updated).toString();

    return (
        <div className = "worldinfo-table">           
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
                    <td>{numberWithCommas(worldwide_covid19_data.cases)}</td>
                    <td>{numberWithCommas(worldwide_covid19_data.active)}</td>
                    <td>{numberWithCommas(worldwide_covid19_data.recovered)}</td>
                    <td>{numberWithCommas(worldwide_covid19_data.todayRecovered)}</td>
                    <td>{numberWithCommas(worldwide_covid19_data.critical)}</td>
                    <td>{numberWithCommas(worldwide_covid19_data.deaths)}</td>
                    <td>{numberWithCommas(worldwide_covid19_data.todayDeaths)}</td>
                </tr>
            </table>
            <br /> <br />
            <hr className = "line"></hr>
            <br /> <br />
        </div>
    );
}

export default Worldwide;