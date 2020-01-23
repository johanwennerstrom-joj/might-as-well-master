import React from "react";

class GooglePlaces extends React.Component {
  state = {
    placeSuggest: {}
  };
  placeSuggest = async props => {
    const key = "AIzaSyC_Hmiybk3qMrS0_dH1E_WQt7hvBh6KXUk";
    const radius = 1000;
    const type = "bar";
    const lat = "59.320284";
    const long = "18.071860";
    const proxy = "https://cors-anywhere.herokuapp.com/";

    const api_call = await fetch(
      `${proxy}https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${long}&radius=${radius}&types=${type}&key=${key}`
    );
    const data = await api_call.json();
    // const isOpen = data.results[0].opening_hours.open_now;
    console.log(data);
    let openArray = [];
    const resultArray = data.results;
    const isOpen = resultArray.map(item => {
      if (item.opening_hours.open_now) {
        const placeInfo = [item.name, item.types];
        openArray.push(placeInfo);
      }
      return item;
    });
    console.log(openArray);
  };
  componentDidMount() {
    this.placeSuggest();
  }
  render() {
    return <div></div>;
  }
}

export default GooglePlaces;
