import React from "react";

class ApiFetch extends React.Component {
  state = { locationData: {}, Name: "", SiteId: "", X: "", Y: "" };
  locationData = async props => {
    const key = "91055ad9865640ba844d8e2569f667ad";
    const station = "true";
    const maxResults = "1";
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const fake = "slussen";
    const format = "json"
    const api_call = await fetch(
      `${proxy}https://api.sl.se/api2/typeahead.${format}?key=${key}&searchstring=${fake}&stationsonly=${station}&maxresults=${maxResults}`
    );

    const data = await api_call.json();
    const { ResponseData } = data;
    ResponseData &&
      ResponseData.map(item => {
        this.setState({
          Name: item.Name,
          SiteId: item.SiteId,
          X: item.X,
          Y: item.Y
        });
        // console.log(data);
        return item;
      });
    this.setState({ locationData: data });
  };

  componentDidMount() {
    this.locationData();
  }

  render() {
    return (
      <div>
        <h1>Plats: <br />{this.state.Name}</h1>
        <h1>SiteID: <br />{this.state.SiteId}</h1>
        <h1>Long: <br />{this.state.X}</h1>
        <h1>Lat: <br />{this.state.Y}</h1>
      </div>
    );
  }
}

export default ApiFetch;
