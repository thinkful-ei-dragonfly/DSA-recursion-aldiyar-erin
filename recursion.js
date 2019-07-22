/* eslint-disable strict */
const countSheeps = function (number) {
  if (number === 0) {
    return 'All sheep jumped over the fence';
  }

  return `${number}: Another sheep jump over the fence ` + countSheeps(number - 1)
}

// console.log(countSheeps(3))


const powerCalculator = function (integer, power) {
  if (power === 1) {
    return integer;
  }

  if (power < 0) {
    return 'exponent should be >= 0';
  }

  return integer * powerCalculator(integer, (power - 1))


}


// console.log(powerCalculator(10, -1));

const reverseStr = function (string) {

  if (string === '') {
    return '';
  }

  const lastChar = string[string.length - 1];
  return lastChar + reverseStr(string.slice(0, string.length - 1));
}

// console.log(reverseStr('recursion'));


let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];



const maze = function (array) {
  const exit = array[array.length - 1][array.length - 1];
  const start = array[0][0];

  

  return { exit, start };
}

const array = [
  ['S', 'R', 'R'],
  ['D', '*', 'D'],
  ['D', 'R', 'e']
]

console.log(maze(array))