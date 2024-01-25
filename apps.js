"use strict";

const flower = {
  name: "daisy",
  species: "Gerbera jamesonii",
  wateringSchedule: "mornings",
};

const plants = [flower];

const list = document.getElementById("flower-list");

function displayPlants() {
  list.innerHTML = "";
  plants.forEach((flower) => {
    const p = document.createElement("p");
    p.textContent = `${flower.name} ${flower.species} ${flower.wateringSchedule}`;
    list.appendChild(p);
  });
}

function addPlants(name, species, wateringSchedule) {
  const newFlower = { name, species, wateringSchedule };
  plants.push(newFlower);
}

const form = document.getElementById("flower-form");
form.addEventListener("submit", addPlants(e));
e.preventDefault();

const name = form.name.value;
const species = form.species.value;
const wateringSchedule = form.waterSchedule.value;

// const btn = getElementById("button");
// btn.addEventListener("click", (event) => {
// event.addPlants ();
// }

displayPlants();
