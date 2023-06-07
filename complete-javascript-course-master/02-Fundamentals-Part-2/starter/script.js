"use strict";

/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) {
    hasDriversLicence = true;
}
if (hasDriversLicence) {
    console.log("I can drive :D");
}

// const interface = "Audio";
// const private = 1984;
*/

/*
function logger() {
    console.log("My name is Jonas")
}

// calling / running / invoking the function
logger();
logger();
logger();

// (apples, oranges) <- These are prameters, they are the input data of the function.
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

// (5,0) <- in this case these are called arguments.
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 5);
console.log(appleOrangeJuice);

const wrongJuice = fruitProcessor();
console.log(wrongJuice);

const wrongWrongJuice = fruitProcessor(2, 3, 4);
console.log(wrongWrongJuice);

const wrongWrongWrongJuice = fruitProcessor("waht", "is this", "hi");
console.log(wrongWrongWrongJuice);

const num = Number("23");
*/

/*
// function calcAge1(birthYear) {
//     const age = 2023 - birthYear;
//     return age;
// }

// Function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
const age1 = calcAge1(2003);

// Function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const age2 = calcAge2(2003);


console.log(age1, age2);
*/

/*
// Function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

// Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} will retire in ${retirement} years.`
}

console.log(yearsUntilRetirement(2003, "Timofei"));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`
    return juice;
}

console.log(fruitProcessor(3, 4));
*/

/*
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(1997);

function positiveNumber(number) {
    return (number * (-1))
}

function yearsUntilRetirement(birthYear, firstName) {
    const age = calcAge3(birthYear);
    const retirement = 65 - age;

    if (retirement >= 0) {
        return `${firstName} will retire in ${retirement} years.`
    } else {
        return `${firstName} has been retired for ${positiveNumber(retirement)} years`
    }
}

console.log(yearsUntilRetirement(2003, "Timofei"));
console.log(yearsUntilRetirement(1997, "Caleb"));
console.log(yearsUntilRetirement(1950, "Glen"));
*/

/*
const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

function checkwinner(avgDolphins, avgKoalas) {

    if (avgDolphins >= (avgKoalas * 2)) {
        return (`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= (avgDolphins * 2)) {
        return (`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
    } else if (avgDolphins === (avgKoalas * 2) || avgKoalas === (avgDolphins * 2)) {
        return ("Tie, no one wins, everyone is a loser.")
    }

    return ("No one wins, neither of the teams reached double the score of the other team.")

}

// Test 1
const avgDolphinsDATA1 = calcAverage(44, 23, 71);
const avgKoalasDATA1 = calcAverage(65, 54, 49);
// Test 2 
const avgDolphinsDATA2 = calcAverage(85, 54, 41);
const avgKoalasDATA2 = calcAverage(23, 34, 27);

console.log(avgDolphinsDATA1);
console.log(avgKoalasDATA1);

console.log(avgDolphinsDATA2);
console.log(avgKoalasDATA2);


console.log("DATA1 ", checkwinner(avgDolphinsDATA1, avgKoalasDATA1))
console.log("DATA2 ", checkwinner(avgDolphinsDATA2, avgKoalasDATA2))
*/

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];

console.log(`${friends[2]}`, friends);
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length - 1]);
//Any EXPRESSION can go into these:"[]".
console.log(friends[friends.length]);

friends[2] = "Jay";
console.log(friends);
// friends[2, 1, 0] = "Timofei", "Caleb", "Marc";
// DID NOT WORK :(
// console.log(friends);

const firstName = "Timofei";
const timofei = [firstName, 'Druzhinin', 2023 - 2003, 'teacher', friends];
console.log(timofei);

function calcAge(birthYear) {
    return 2023 - birthYear;
}
const years = [1984, 1990, 1997, 2000, 2009];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];

console.log(ages);
*/

/*
// ADD ELEMENTS
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push('Jay');
// The ".push" function outputs the the new length value.
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// REMOVE ELEMENTS
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Peter')) {
    console.log('You have a friend called Peter.');
} else {
    console.log(`You have a friend called ${friends[1]}.`)
}
*/

/*
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return (bill * 0.15);
    } else {
        return (bill * 0.20);
    }
};

if (calcTip(10) === 2 && calcTip(100) === 15 && calcTip(1000) === 200) {
    console.log("The calcTip function works as expected.");
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

console.log(bills);
console.log(tips);
console.log(total);
*/

/*
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven']
}
*/

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven']
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';

console.log(jonas[`first${nameKey}`]);
console.log(jonas[`last${nameKey}`]);

const interestedIn = prompt('What do you want to know about Jonas? Choose out of following: firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Learn to read tough guy.")
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

/*
const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${this.hasDriversLicense ? `a` : `no`} driver's license.`
    }
}

console.log(jonas.calcAge());
console.log(jonas.age);

// console.log(jonas['calcAge'](jonas.birthYear));

console.log(jonas.getSummary());
*/

/*
const markMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBmi: function () {
        this.Bmi = this.mass / (this.height ** 2);
        return this.Bmi
    }
}

const johnSmith = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,

    calcBmi: function () {
        this.Bmi = this.mass / (this.height ** 2);
        return this.Bmi
    }
}

console.log(markMiller.calcBmi(), johnSmith.calcBmi())

if (markMiller.calcBmi() > johnSmith.calcBmi()) {
    console.log(`${markMiller.fullName}'s BMI (${markMiller.Bmi}) is higher than ${johnSmith.fullName}'s (${johnSmith.Bmi})!`)
} else {
    console.log(`${johnSmith.fullName}'s BMI (${johnSmith.Bmi}) is higher than ${markMiller.fullName}'s (${markMiller.Bmi})!`)
}
*/

/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}.🏋️`)
}
*/

/*
const years = [1997, 2001, 2003, 2009];
const currentYear = 2023;
const ages = [];
const types = [];
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ['Michael', 'Peter', 'Steven'],
    true
];

for (let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i])
}

for (let i = 0; i < jonasArray.length; i++) {
    // Filling types array
    types.push(typeof jonasArray[i]);
    console.log(types)
}

for (let i = 0; i < years.length; i++) {
    ages.push(currentYear - years[i]);
}
console.log(ages)

// continue and break
console.log('---ONLY STRINGS---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('---LOOKING FOR A NUMBER---');
for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    if (typeof jonasArray[i] === 'number') break;
}
*/


const jonas = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ['Michael', 'Peter', 'Steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(jonas[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`---Starting exercise ${exercise}`)
    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Rep(${rep}).`);
    }
}