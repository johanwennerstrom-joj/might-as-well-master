import React from "react";

class RealTidsInfo extends React.Component {
    state = { realData: {} };
    realData = async props => {
        const key = "19232401261643c8943294df258a1797";
        const siteId = "9192"
        const timeWindow = "0"
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const format = "json"

        const api_call = await fetch(`${proxy}https://api.sl.se/api2/realtimedeparturesV4.${format}?key=${key}&siteid=${siteId}&timewindow=${timeWindow}`);
        const data = await api_call.json();
        // console.log(data);
        // console.log(data.ResponseData.Metros[0].LineNumber);

        const lines = data.ResponseData.Metros;
        let arrayLine = [];
        const lineArray = lines.map((line) => {
            if (line.TimeTabledDateTime !== line.ExpectedDateTime) {
                const times = [line.LineNumber, line.TimeTabledDateTime, line.ExpectedDateTime]
                arrayLine.push(times);
                console.log(arrayLine)
                // console.log(line.TimeTabledDateTime);
                // console.log(line.ExpectedDateTime);
            }
        });

    }
    componentDidMount() {
        this.realData();
    }
    render() {
        return (
            <div>
                <h1>{this.state.LineNumber}</h1>
                {this.state.lineArray}
                <p>Array Line: <br />{this.state.arrayLine}</p>
            </div>
        );
    }
}
export default RealTidsInfo