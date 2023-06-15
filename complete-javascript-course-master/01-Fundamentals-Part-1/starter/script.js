/*
let js = "amazing";
console.log(40 + 28 + 23 - 10);

console.log("Jonas");
console.log(1984);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $fuction = 27;

let person = "Ludwig";
let PI = 3.14;

// Keep variables descriptive and helpful.
// Unlike lines 25 & 26.
let myFirstJob = "Programer";
let myCurrentJob = "Teacher";

// These variables below suck, don't do stuff like this.
let job1 = "Programer";
let job2 = "Teacher";

console.log(myFirstJob);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun)

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 1984);
// console.log(typeof "Glen Taylor.");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1984;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 24;
age = 30;

let birthYear = 1984;
birthYear = 2003;

var job = "Programer";
job = "Teacher";

lastName = "Taylor";
console.log(lastName);
*/

/*
let currentYear = 2023;
let birthYearCaleb = 1997;
let brithYearSarah = 2018;

//Math Operators
let ageCaleb = currentYear - birthYearCaleb;
let ageSarah = currentYear - brithYearSarah;

console.log(ageCaleb, ageSarah);
console.log(ageCaleb * 2, ageCaleb / 10, 2 ** 3);
// 2 ** 3 is 2 to the power of 3 otherwise known as 2 * 2 * 2

let firstName = "Caleb";
let lastName = "Taylor";
let stringSpace = " ";
console.log(firstName + stringSpace + lastName);

//Assignment Operators
let x = 10 + 5; // x = 15
x += 10;        // x = x + 10 = 25
x *= 4;        // x = x * 4 = 100
x++;          // x = x + 1 = 101
x--;         // x = x - 1 = 100

console.log(x);

//Comparison Operators (Produce boolean values)
console.log(ageCaleb > ageSarah); // >, <, >=, <=.
console.log(ageCaleb >= 26);

let isAdult = ageSarah > 18;
*/

/*
let now = 2037
let ageJonas = now - 1991;
let ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10
console.log(x, y);

let avgAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avgAge);
*/

/*
let markFirstWeight = 78;
let markFirstHeight = 1.69;
let johnFirstWeight = 92;
let johnFirstHeight = 1.95;

let markSecondWeight = 95;
let markSecondHeight = 1.88;
let johnSecondWeight = 95;
let johnSecondHeight = 1.76;

let markFirstBMI = markFirstWeight / (markFirstHeight ** 2);
let markSecondBMI = markSecondWeight / (markSecondHeight ** 2);
let johnFirstBMI = johnFirstWeight / (johnFirstHeight ** 2);
let johnSecondBMI = johnSecondWeight / (johnSecondHeight ** 2);

console.log(markFirstBMI, johnFirstBMI);

let markHigherAvgBMI = ((markFirstBMI + markSecondBMI) / 2) > ((johnFirstBMI + johnSecondBMI) / 2);
console.log(markHigherAvgBMI);
*/

/*
let firstName = "Tim";
let job = "programmer";
let birthYear = 1984;
let currentYear = 2023;

let tim = "I'm " + firstName + ", a " + (currentYear - birthYear) + " year old " + job;
console.log(tim);


// template literals start with: `;
// Insert a variable like this: ${Variable}
let timNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}`;
console.log(timNew);

console.log(`Just a regular string...`);

// Multiline string before
console.log("String with \n\
multiple lines.");

// Multiline string now
console.log(`Just press
enter
and you're good...`);
*/

/*
let age = 15;

console.log(`I was told that Sarah is ${age} years old.`);

if (age >= 18) {
    console.log(`Sarah is old enough to learn driving.`);
} else {
    let yearsLeft = 18 - age;
    console.log(`Sarah is not old enough to learn driving.`);
    console.log(`She can do so in ${yearsLeft} years.`);
}

let birthYear = 1999;
let century = null;

if (birthYear <= 2000) {
    century = 20
    console.log(`${century}th century.`)
} else {
    century = 21
    console.log(`${century}st century.`)
}
*/

/*
// Type conversion //
let inputYear = `1984`;
let adultAge = 18;

console.log(inputYear + adultAge);
console.log(`inputYear (${inputYear}) + adultAge (${adultAge}) = ${Number(inputYear) + adultAge}`);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23.)

// Type coersion //

console.log("I am " + 23 + " years old!");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1;
n = n - 1;
console.log(n, "I'm guessing it's going to be 10.");
*/

// The 5 falsy values: 0, '', undefined, null, NaN.
// falsy numbers are false when converted to a boolean.
// all other values are converted to true.

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Tim."));
console.log(Boolean({}));

let money = 0;
if (money) {
    console.log("Don't spend it all ;)")
} else {
    console.log("You should get a job...bro...")
}

let height;
if (height) {
    console.log("YAY! height is defined!");
} else {
    console.log("height is UNDEFINED.")
}
*/

/*
let age = 18;

if (age === 18) {
    console.log("You're an adult now!(strict)");
}
if (age == 18) {
    console.log("You're an adult now!(lose)");
}

let favorite = Number((prompt("What's your favorite number?")));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
    console.log("Cool,", favorite, "is an amazing number!");
} else if (favorite === 9) {
    console.log(`${favorite} is also a cool number.`);
} else if (favorite === 7) {
    console.log(`${favorite} is also a cool number.`);
} else {
    console.log("The number provided is not 23 or 9 or 7.")
}

if (favorite !== 23) {
    console.log("Why not 23!?!")
}

// [===] <- Strict equality. This means that the value has to be exactly the same, without coersion.
// [==]  <- Lose equality operator. Performs type coersion.Data types may be different.
// pretty much never is there a reason to use the lose equality operator.
*/

/*

let age = 16;

*/

/*
let hasDriversLicence = true; // A
let hasGoodVision = true; // B
let isTired = true; //C

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//     console.log("Sarah is able to drive.");
// } else {
//     console.log("Someone else should drive...");
// }

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive.");
} else {
    console.log("Someone else should drive...");
}
*/

/*
let day = prompt("Day of the week?");

switch (day) {
    case "monday": // day === "monday"
        console.log("Plan course structure");
        console.log("Ask Caleb an obvious question.");
        break;

    case "tuesday": // day === "tuesday"
        console.log("It's may 9, please go and do your extra shift.");
        break;

    case "wednessday":
    case "thursday":
        console.log("Write coding examples.");
        break;

    case "friday":
        console.log("Record programming videos.");
        break;

    case "saturday":
    case "sunday":
        console.log("Enjoy the weekend.");
        break;

    default:
        console.log("Not a valid day!")
}

if (day === "monday") {
    console.log("Plan course structure");
    console.log("Ask Caleb an obvious question.");

} else if (day === "tuesday") {
    console.log("It's may 9, please go and do your extra shift.");

} else if (day === ("wednessday" || "thrusday")) {
    console.log("Write coding examples.");

} else if (day === "friday") {
    console.log("Record programming videos.");

} else if (day === ("saturday" || "sunday")) {
    console.log("Enjoy the weekend.");
} else {
    console.log("Not a valid day!")
}
*/

/*
// Expressions produce or are values.

// Expression Examples
3 + 4
1991
true && false && !true

// Example of a statement

if (23 > 10) {
    let str = "23 is bigger";
}

let me = "Tim";
console.log(`I am ${23 - 3} years old.${me}`)
*/

/*
let age = 23;
// age >= 18 ? console.log("I like to drink wine.") : console.log("I like to drink water.");

let drink = age >= 18 ? "wine" : "water";
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = "wine";
} else {
    drink2 = "water";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/

/*
let bill = Number(prompt("Bill amount"));
let tipPercent;

(50 <= bill && bill <= 300) ? tipPercent = 0.15 : tipPercent = 0.20;

console.log(`The bill was $${bill} the tip% was ${tipPercent} ($${bill * tipPercent}), and the total value is $${(bill) + (bill * tipPercent)}.`)
*/

/*
let costcoMembership = 110;
let milesPerGalon = 20;
let workDaysInYear = 4;
let commuteAmount = 2;
let distanceToLocation = 12.3;
let weeksInAYear = 52.1429;
let costcoGalon = 4.40;
let averageGalon = 4.90;
let workMilesYear = ((distanceToLocation * commuteAmount) * (weeksInAYear * workDaysInYear));
let galonsPerYear = workMilesYear / milesPerGalon;

console.log(`You'd use this many galons a year: ${galonsPerYear}`);
console.log(`Costco galon cost would be: ${(galonsPerYear) * costcoGalon} wihout a membership. And ${(((galonsPerYear) * costcoGalon) + costcoMembership)}`);
console.log(`Average galon cost would be: ${(galonsPerYear) * averageGalon}`);

// I can change stuff YO!!!

*/

//FOR LOOP. pretty cool, but eh...it just counts.
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
};

//WHILE LOOPS, ITS DA BOMB.

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`)
    rep++
};
*/

/*
function diceGen(sides) {
    return Math.trunc(Math.random() * sides) + 1;
}

let cumter = 0;

let dice1 = 7;
let dice2 = 7;
let dice3 = 7;
let dice4 = 7;
let dice5 = 7;
let dice6 = 7;

while (!(dice1 === 1 && dice2 === 2 && dice3 === 3 && dice4 === 4 && dice5 === 5 && dice6 === 6)) {
    cumter++
    if (cumter > 99999) {
        console.log(`Try: ${cumter}`)
        break
    };

    dice1 = diceGen(6);
    console.log(`Dice1 is: ${dice1}`);
    if (dice1 !== 1) {
        continue
    }

    dice2 = diceGen(6);
    console.log(`Dice2 is: ${dice2}`);
    if (dice2 !== 2) {
        continue
    }

    dice3 = diceGen(6);
    console.log(`Dice3 is: ${dice3}`);
    if (dice3 !== 3) {
        continue
    }

    dice4 = diceGen(6);
    console.log(`Dice4 is: ${dice4}`);
    if (dice4 !== 4) {
        continue
    }

    dice5 = diceGen(6);
    console.log(`Dice5 is: ${dice5}`);
    if (dice5 !== 5) {
        continue
    }

    dice6 = diceGen(6);
    console.log(`Dice6 is: ${dice6}`);
    if (dice6 !== 6) {
        continue
    }

    console.log(`Try: ${cumter}`)
};

console.log("finished")
*/

/*
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(totals)

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length
}

console.log('Average tips and totals:')
console.log(calcAverage(tips));
console.log(calcAverage(totals));
*/