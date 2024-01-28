"use strict";

const flower = {
  name: "daisy",
  species: "Gerbera jamesonii",
  wateringSchedule: "mornings",
};

let plants = [];

function loadLocalStage() {
  const rawData = localStorage.getItem("plants");
  const parsedData = JSON.parse(rawData);

  if (parsedData) {
    plants = parsedData;
  } else {
    addPlants(flower.name, flower.species, flower.wateringSchedule);
  }
}

function displayPlants() {
  const list = document.getElementById("flower-list");
  list.innerHTML = "";

  plants.forEach((flower) => {
    const li = document.createElement("li");
    li.innerHTML = `<p>Name: ${flower.name}</p> 
    <p>Species: ${flower.species}</p>
    <p>Watering Schedule: ${flower.wateringSchedule}</p>`;
    list.appendChild(li);
  });
}

function addPlants(name, species, wateringSchedule) {
  const newFlower = { name, species, wateringSchedule };
  plants.push(newFlower);
  const flowerShop = JSON.stringify(plants);
  localStorage.setItem("plants", flowerShop);
}

function removePlant() {
  plants.pop();
  const flowerShop = JSON.stringify(plants);
  localStorage.setItem("plants", flowerShop);
}

const btn2 = document.getElementById("remove-btn");

btn2.addEventListener("click", (e) => {
  e.preventDefault();

  removePlant();
  displayPlants();
});

const form = document.getElementById("flower-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.name.value;
  const species = form.species.value;
  const watering = form.waterSchedule.value;


  addPlants(name, species, watering);
  displayPlants();

  if (form.name.value > 5) {
    event.preventDefault();
    alert('Not a valid flower name')
  }
  if (form.species.value > 3 || form.species.value < 25){
    event.preventDefault();
    alert('Not a valid flower species');
  }
  if (form.waterSchedule.value > 3 || form.waterSchedule.value < 25){
    event.preventDefault();
    alert('Not a valid watering schedule');
  }
});


loadLocalStage();

displayPlants();
