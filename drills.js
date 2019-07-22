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

const nthNumber = function (n) {

  if (n === 1) {
    return n;
  }

  return n + nthNumber(n - 1);

}

// console.log(nthNumber(4));

const splitter = function (string, separator) {

  if (string === '') {
    return '';
  }

  const char = string[0];
  if (char !== separator) {
    return char + splitter(string.slice(1), separator);
  } else {
    return '' + splitter(string.slice(1), separator);
  }

}

// console.log(splitter('recur/si/on', '/'));

const fibonacci = function (num) {
  if (num < 2) {
    return num;
  }

  return fibonacci(num - 1) + fibonacci(num - 2);
}

// console.log(fibonacci(7));

const factorial = function (int) {
  if (int === 1) {
    return int;
  }

  return int * factorial(int - 1);
}

// console.log(factorial(5));





let mySmallMaze = [
  ['S', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'E']
];

const printer = function (path, start, end) {
  console.log('Found path', path);
};

const solver = function (maze, position = 0, row, column, direction = 'S', path) {
  if (column < 0 || row < 0) {
    return;
  }

  if (column >= maze[0].length || row >= maze.length) {
    return;
  }

  path[position] = direction;
  position++;
  if (maze[row][column] === 'E') {
    printer(path);
    return;
  }
  if (maze[row][column] === ' ') {
    maze[row][column] = 'x';
    solver(maze, position, row, column - 1, 'L', path);
    solver(maze, position, row - 1, column, 'U', path);
    solver(maze, position, row, column + 1, 'R', path);
    solver(maze, position, row + 1, column, 'D', path);
  }

  position--;
};



// solver(mySmallMaze, 0, 0, 0, 'S', []);



//pseudocode
// e + anagram(ast)
// a + anagram(st)
// s + anagram(t)

const anagram = function(prefix, string){

  if(string.length <= 1){
    console.log(`The anagram is ${prefix}${string}`);
  } else {
    for (let i = 0; i < string.length; i++){
      const firstLetter = string[i];
      // const remaining = string.slice(0, i) + anagram(string.slice(i + 1));
      const remaining = string.slice(0, i) + string.slice(i + 1);
      const third = firstLetter + anagram(remaining);

      console.log(third);
    }
  }
};

anagram('abc');
