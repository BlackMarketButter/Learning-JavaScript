// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*
const x = 23;
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/*

1) Understanding the problem
-What is temp amplitude? Answer: difference between highest and lowest temp.
-How to compute max and min temperatures?
-What's a sonsor error? And what to do? 

2) Breaking up into sub-problems
-Ignore sensor errors
-Find max value in temp array
-Find min value in temp array
-Subtract min from max (amplitude) and return it

*/

/*
function calcTempAmp(temps) {
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === 'string') {
      temps.splice(i, 1);
    }
  }
  console.log(temps);
  const maxValue = Math.max(...temps);
  const minValue = Math.min(...temps);
  return maxValue - minValue;
}

function arrMerger(arr1, arr2) {
  const mergedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    mergedArr.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    mergedArr.push(arr2[i]);
  }

  return mergedArr;
}

const testArray1 = [23, 32, 31, 31, 23, 23, 12, 31, 23];
const testArray2 = [87, 97, 89, 78, 97, 89, 78, 97, 89];

console.log(arrMerger(testArray1, testArray2));
*/

/*
function measureKelvin() {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('degrees celsius')),
  };

  //   console.log(measurement);

  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
}

console.log(measureKelvin());
*/

/*
function calcTempAmp(temps) {
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] === 'string') {
      temps.splice(i, 1);
    }
  }
  console.log(temps);
  const maxValue = Math.max(...temps);
  const minValue = Math.min(...temps);
  return maxValue - minValue;
}

function arrMerger(arr1, arr2) {
  const mergedArr = [];

  for (let i = 0; i < arr1.length; i++) {
    mergedArr.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    mergedArr.push(arr2[i]);
  }

  return mergedArr;
}

const testArray1 = [23, 32, 31, 31, 23, 23, 12, 31, 23];
const testArray2 = [87, 97, 89, 78, 97, 89, 78, 97, 89];

console.log(arrMerger(testArray1, testArray2));
*/
