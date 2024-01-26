"use strict";

const flower = {
  name: "daisy",
  species: "Gerbera jamesonii",
  wateringSchedule: "mornings",
};

const rawData = localStorage.getItem ('flower')

const plants = [''];

plants.push (flower);
const flowerShop = JSON.stringify(flower);
localStorage.getItem ("flower, ")



function displayPlants() {
  const list = document.getElementById("flower-list");
  list.innerHTML = ""; 

  plants.forEach(flower) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>Name: ${flower.name}</p> 
    <p>Species: ${flower.species}</p>
    <p>Watering Schedule: ${flower.wateringSchedule}</p>`
  }

function addPlants(name, species, wateringSchedule) {
  const newFlower = {name, species, wateringSchedule };
  plants.push(newFlower);
  }
};

const form = document.getElementById("flower-form");

form.addEventListener("submit", (event) => {
  event.preventDefault ();

  const name = form.name.value;
  const species = form.species.value;
  const watering = form.waterSchedule.value;

  addPlants(name, species, watering);


displayPlants();
