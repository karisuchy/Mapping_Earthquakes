// Add console.log to check to see if our code is working.
console.log("working");

// Create the tile layer that will be the background of our map.
let streets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// Create a base layer that holds both maps.
let baseMaps = {
  Streets: streets,
  "Satellite Streets": satelliteStreets,
};

// Create the map object with center, zoom level and default layer.
let map = L.map("mapid", {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [streets],
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let torontoHoods = "torontoNeighborhoods.json";

// Create a style .
let myStyle = {
  color: "#0000FF",
  fillColor: "#FFFF00", //             ????? this isn't working????
  weight: 1,
};

// Grabbing our GeoJSON data        ????? this isn't working????
d3.json(torontoHoods).then(function (data) {
  console.log(data, {
    style: myStyle,
    onEachFeature: function (feature, layer) {
      layer.bindPopup(
        "<h1> Neighborhood:" + feature.properties.AREA_NAME + "</h1>"
      );
    },
  });
  L.geoJSON(data).addTo(map).addTo(map);
});

// ---------------------------------------------------------------------

// // Grabbing our GeoJSON data
// d3.json(torontoHoods).then(function (data) {
//   console.log(data);
//   L.geoJSON(data).addTo(map);
// });

// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function (data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function (feature, layer) {
//       layer.bindPopup(
//         "<h1> Airline Code:" +
//           feature.properties.airline +
//           "</h1> <hr> <h2> Destination: " +
//           feature.properties.dst +
//           "</h2>"
//       );
//     },
//   }).addTo(map);
// });

// -----------------------------------------------------------------------------------------

// // Accessing the airport GeoJSON URL
// let airportData =
//   "https://raw.githubusercontent.com/karisuchy/Mapping_Earthquakes/main/majorAirports.json";

// // Grabbing our GeoJSON data.
// d3.json(airportData).then(function (data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data, {
//     onEachFeature: function (feature, layer) {
//       layer.bindPopup(
//         "<h1> Airport Code:" +
//           feature.properties.faa +
//           "</h1> <hr> <h2> Airport Name: " +
//           feature.properties.name +
//           "</h2>"
//       );
//     },
//   }).addTo(map);
// });
