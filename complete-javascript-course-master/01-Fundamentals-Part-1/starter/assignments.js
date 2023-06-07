/*
let country = "United States of America";
let continent = "Americas";
let population = 300;

console.log(country);
console.log(continent);
console.log(population);


console.log("");
let isIsland = false;
let language;
console.log("isIsland variable:", isIsland);
console.log("isIsland Variable type:", typeof isIsland);
console.log(typeof isIsland, typeof population, typeof country, typeof language);

console.log(...[isIsland, population, country, language].map(item => typeof item));
*/

/*
const language = "Russian";
*/

/*
const population = 300000000;
const avgPopulation = 33000000;
const finland = 6000000;
const description = "Portugal is in Europe and it's 11 million people speak portuguese."

console.log("US population divided in half = ", population / 2);
console.log("US population + 1 =", population + 1);
console.log("Does Finland have a bigger population?", finland > population);
console.log("Does US have an above average population?", population > avgPopulation);
console.log(description)
*/

/*
const country = `Russia`;
const continent = `Eurasia`;
const population = `147 million`;
const language = `russian`;

const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`

console.log(description)
*/

/*
const markFirstWeight = 78;
const markFirstHeight = 1.69;
const johnFirstWeight = 92;
const johnFirstHeight = 1.95;

const markSecondWeight = 95;
const markSecondHeight = 1.88;
const johnSecondWeight = 95;
const johnSecondHeight = 1.76;

const markFirstBMI = markFirstWeight / (markFirstHeight ** 2);
const markSecondBMI = markSecondWeight / (markSecondHeight ** 2);

const johnFirstBMI = johnFirstWeight / (johnFirstHeight ** 2);
const johnSecondBMI = johnSecondWeight / (johnSecondHeight ** 2);

const markAvgBMI = (markFirstBMI + markSecondBMI) / 2;
const johnAvgBMI = (johnFirstBMI + johnSecondWeight) / 2;

console.log(`Mark's average BMI is: ${markAvgBMI}.`);
console.log(`John's average BMI is: ${johnAvgBMI}`);

if (markAvgBMI > johnAvgBMI) {
    console.log(`Mark's average BMI (${markAvgBMI}) is higher than John's (${johnAvgBMI}) by ${markAvgBMI - johnAvgBMI}`);
} else {
    console.log(`John's average BMI (${johnAvgBMI}) is higher than Mark's (${markAvgBMI}) by ${johnAvgBMI - markAvgBMI} points.`);
}
*/

/*
const sarahPrefLanguage = "english";
const sarahPrefPopulation = 50;
const sarahPrefIslandOrNo = "not an island";

const country = `Russia`;
const continent = `Eurasia`;
const isAnIsland = "not an island";
const population = 147;
const language = `russian`;

if (isAnIsland === sarahPrefIslandOrNo, population > sarahPrefPopulation, language === sarahPrefLanguage) {
    console.log("YOU SHOULD LIVE HERE IN RUSSIA!")
} else {
    console.log("Russia ain't for you.")
}
*/

/*
const avgDolphinsScore = ((97 + 112 + 101) / 3);
const avgKoalasScore = ((109 + 95 + 106) / 3);

console.log(`Dolphins: ${avgDolphinsScore}, Koalas: ${avgKoalasScore}`);

if ((avgDolphinsScore || avgKoalasScore) >= 100) {
    if (avgDolphinsScore > avgKoalasScore) {
        console.log("DOLPHINS WIN THE COMPETITION!!!");
    } else if (avgKoalasScore > avgDolphinsScore) {
        console.log("KOALAS WIN THE COMPETITION!!!");
    } else {
        console.log("Y'all are losers...its a tie...");
    }
} else {
    console.log("No one leaves until one of the teams gets 100 points...dead of alive.");
}
*/

/*
const language = prompt("Provide a language");

switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;

    case "spanish":
        console.log("2nd place in number of native speakers!");
        break;

    case "enlish":
        console.log("3rd place");
        break;

    case "hindi":
        console.log("Number 4");
        break;

    case "arabic":
        console.log("5th most spoken language");
        break;

    default:
        console.log("Great language too ;D");
}


if (languageRankings[language]) {
    console.log(languageRankings[language]);
} else {
    console.log("Great language too ;D");
}

const languageRankings = {
    chinese: "MOST number of native speakers!",
    mandarin: "MOST number of native speakers!",
    spanish: "2nd place in number of native speakers!",
    english: "3rd place",
    hindi: "Number 4",
    arabic: "5th most spoken language"
};
*/

/*
const country = `Russia`;
const population = 147;

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average.`);
*/