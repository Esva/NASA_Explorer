async function getAPIByDate(year, month, day) {
  console.log(year, month, day);
  let response = await fetch(
    `https://api.nasa.gov/EPIC/api/natural/date/${year}-${month}-${day}?api_key=ovelf92YaGd8CSPpcHOybxmrH54y4XCtjGgXvarN`
  );
  let data = await response.json();
  let imageDisplay = document.querySelector("#image");
  let checkBoxDiscoveryX = document.querySelector("#discovery-x");
  let checkBoxDiscoveryY = document.querySelector("#discovery-y");
  let checkBoxDiscoveryZ = document.querySelector("#discovery-z");
  let checkBoxSun = document.querySelector("#sun");
  let checkBoxMoon = document.querySelector("#moon");
  let checkBoxCentral = document.querySelector("#central");
  let checkBoxEarth = document.querySelector("#earth");

  // Set image to JSON return
  const image = await data[0].image;
  imageDisplay.setAttribute(
    "src",
    `https://api.nasa.gov/EPIC/archive/natural/${year}/${month}/${day}/png/${image}.png?api_key=ovelf92YaGd8CSPpcHOybxmrH54y4XCtjGgXvarN`
  );
  imageDisplay.classList.remove("hidden");

  // Set discovery co-ordinates
  const discoveryCoords = data[0].dscovr_j2000_position;
  checkBoxDiscoveryX.innerText = `X Co-ordinates: ${discoveryCoords.x}`;
  checkBoxDiscoveryY.innerText = `Y Co-ordinates: ${discoveryCoords.x}`;
  checkBoxDiscoveryZ.innerText = `Z Co-ordinates: ${discoveryCoords.x}`;

  // Set sun co-ordinates
  const sunCoords = data[0].sun_j2000_position;
  // Set moon co-ordinates
  const moonCoords = data[0].lunar_j2000_position;
  // Set central co-ordinates
  const centralCoords = data[0].centroid_coordinates;
  // Set earth co-ordinates
  const earthCoords = data[0].attitude_quaternions;
}

export default getAPIByDate;
