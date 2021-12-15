// Add console.log to check to see if our code is working.
console.log("working");

// Set the coordinates for the center of the map using the set view method
let map = L.map("mapid").setView([36.1733, -120.1794], 4);

// // Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.379],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088],
// ];

// Skill Drill 13.4.3   - need to add dashed line and opacity of .5
let line = [
  [37.6213, -122.379], // SFO
  [30.1975, -97.6664], // AUS
  [44.8848, -93.2223], // MSP
  [43.6777, -79.6248], // YYZ
  [40.6413, -73.7781], // JFK
];

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 4,
}).addTo(map);

// Create the tile layer that will be the background of our map.
let background = L.tileLayer(
  "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY,
  }
);

// Then we add our background tile layer to the map.
background.addTo(map);
