const fetch = require("node-fetch");

let url = "https://pokeapi.co/api/v2/pokemon-species/ditto";

const response = await fetch(url);
console.log(response.status);

console.log("Ernd");