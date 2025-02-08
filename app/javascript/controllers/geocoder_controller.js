import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="geocoder"
export default class extends Controller {
  static targets = ["formElement", "userInput", "coordinates"];

  connect() {
    console.log("Geocoder controller connected");
    console.log("Form Element Target:", this.formElementTarget);
    // console.log("User input:", this.userInputTarget);
  }

  TOKEN =
    "pk.eyJ1IjoibHVpc2FwZXJleiIsImEiOiJjbTZzOTN0czIwNjF6MmlzZHJ3a2xmOXVqIn0.IReygCN1JMDC0edv5X3Qgg";

  displayCoordinates(lng, lat) {
    const coordinates = this.coordinatesTarget;
    coordinates.innerText = `${lng},${lat}`;
  }

  showMapAndCoordinates(event) {
    event.preventDefault();
    const address = this.userInputTarget.value;
    // console.log("User entered address:", address);
    // //get the user input and

    const url = `https://api.mapbox.com/search/geocode/v6/forward?q=${address}&access_token=${this.TOKEN}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const longitude = data.features[0].properties.coordinates.longitude;
        const latitude = data.features[0].properties.coordinates.latitude;
        this.displayCoordinates(longitude, latitude);
        // console.log("Longitude:", longitude);
        // console.log("Latitude:", latitude);
      });
  }
}

// 3. Diplay the coordinates inserting them in the p

// 4. injectMap with Mapbox API and marker

// 2. Create the show showCoordinatesandMap function that takes the user input and converted into coordinates
// We need to fech those coordinates from the Maxbox API
// in the same function we will diplay the DisplayCoordinates function and the injectMap function

// 1. Grap the form with an event listener(data action) of submit for then calling the showCoordinatesandMap function
