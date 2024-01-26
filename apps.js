"use strict";

const flower = {
  name: "daisy",
  species: "Gerbera jamesonii",
  wateringSchedule: "mornings",
};


let plants = [];


function loadLocalStage() {
  const rawData = localStorage.getItem ('plants')
  const parsedData = JSON.parse(rawData)
  
  
  if (parsedData) {
    plants = parsedData;
  } else {
    addPlants (flower.name, flower.species, flower.wateringSchedule)
  }
}


function displayPlants() {
  const list = document.getElementById("flower-list");
  list.innerHTML = "";
  
  plants.forEach((flower) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>Name: ${flower.name}</p> 
    <p>Species: ${flower.species}</p>
    <p>Watering Schedule: ${flower.wateringSchedule}</p>`
    list.appendChild (li);
  })
  
  
};
  
  function addPlants(name, species, wateringSchedule) {
    const newFlower = {name, species, wateringSchedule };
    plants.push(newFlower);
    const flowerShop = JSON.stringify(plants);
    localStorage.setItem ('plants', flowerShop)
  }

const form = document.getElementById("flower-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.name.value;
  const species = form.species.value;
  const watering = form.waterSchedule.value;

  addPlants(name, species, watering);
  displayPlants ();
});


loadLocalStage ();

displayPlants();

