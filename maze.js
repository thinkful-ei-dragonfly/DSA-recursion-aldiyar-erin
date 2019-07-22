/* eslint-disable strict */
let laby = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const maze = function (labyrinth, position = 0, row, col, direction = 'S', path) {
  if (col < 0 || row < 0) {
    return;
  }
  if (col >= labyrinth[0].length || row >= labyrinth.length) {
    return;
  }

  path[position] = direction;
  position++;

  if (labyrinth[row][col] === 'e') {
    PrintPath(path, 1, position - 1);
    return;
  }
  if (labyrinth[row][col] === ' ') {
    // The current cell is free. Mark it as visited
    labyrinth[row][col] = 's';
    // Invoke recursion to explore all possible directions
    maze(labyrinth, position, row, col - 1, 'L', path); // left
    maze(labyrinth, position, row - 1, col, 'U', path); // up
    maze(labyrinth, position, row, col + 1, 'R', path); // right
    maze(labyrinth, position, row + 1, col, 'D', path); // down
    // Mark back the current cell as free
    labyrinth[row][col] = ' ';
  }
  // Remove the last direction from the path
  position--;

}
const PrintPath = function (path, startPos, endPos) {
  console.log('Found path to the exit: ');
  console.log(path);
}

maze(laby, 0, 0, 0, 'S', []);