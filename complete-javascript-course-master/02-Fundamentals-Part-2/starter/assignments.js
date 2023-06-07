"use strict"

/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}!`
}

const country1 = describeCountry(prompt("Country?"), prompt("Population? (in millions)"), prompt("Capital city?"));
console.log(country1);

const country2 = describeCountry(prompt("Country?"), prompt("Population? (in millions)"), prompt("Capital city?"));
console.log(country2);

const country3 = describeCountry(prompt("Country?"), prompt("Population? (in millions)"), prompt("Capital city?"));
console.log(country3);
*/

/*
function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

const percentageOfWorld2 = function (population) {
    return ((population / 7900) * 100);
}

const usaPopulationPercent = percentageOfWorld1(300);
const russiaPopulationPercent = percentageOfWorld1(147);
const tajikistanPopulationPercent = percentageOfWorld1(20);
console.log(usaPopulationPercent, russiaPopulationPercent, tajikistanPopulationPercent);
*/

/*
const percentageOfWorld1 = (population) => {
    return ((population / 7900) * 100);
}

// const percentageOfWorld2 = function (population) {
//     return ((population / 7900) * 100);
// }

const usaPopulationPercent = percentageOfWorld1(300);
const russiaPopulationPercent = percentageOfWorld1(147);
const tajikistanPopulationPercent = percentageOfWorld1(20);
console.log(usaPopulationPercent, russiaPopulationPercent, tajikistanPopulationPercent);
*/

/*
function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world.`;
}

console.log(describePopulation);
console.log(describePopulation());
console.log(describePopulation("Russia", 147));
*/

/*
const populations = [332.28, 147.2, 36.99, 9.5];
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3]),
]

console.log(populations.length === 4);
console.log(percentages);

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}
*/

/*
const neighbours = ["Afghanistan", "China", "Kyrgyzstan", "Uzbekistan"];

console.log("Original.")
console.log(neighbours)

neighbours.push("Utopia");
console.log("After first push.")
console.log(neighbours)

neighbours.pop()
console.log("After Utopia was desolved sadly...")
console.log(neighbours)

if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
};

neighbours[neighbours.indexOf("China")] = "something hopefully"

console.log(neighbours)
*/

/*
const myCountry = {
    country: "United States of America",
    capital: "Washington DC",
    language: "english",
    population: 324,
    neighbours: ["Canada", "Mexico"]
}

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population)

myCountry['population'] -= 2;
console.log(myCountry.population);
*/

/*
const myCountry = {
    country: "United States of America",
    capital: "Washington DC",
    language: "english",
    population: 324,
    neighbours: ["Canada", "Mexico"],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },

    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland
    }
}

myCountry.describe()
myCountry.checkIsland()
console.log(myCountry);
*/

/*
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting.`)
}
*/

/*
const populations = [332.28, 147.2, 36.99, 9.5];
const percentagesOfWorld = [];

for (let i = 0; i < populations.length; i++) {
    percentagesOfWorld.push(percentageOfWorld1(populations[i]));
}
console.log(percentagesOfWorld)

function percentageOfWorld1(population) {
    return ((population / 7900) * 100);
}
*/

const listOfneighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

for (let i = 0; i < listOfneighbours.length; i++) {
    for (let y = 0; y < listOfneighbours[i].length; y++) {
        console.log(`Neighbour: ${listOfneighbours[i][y]}`)
    }
}