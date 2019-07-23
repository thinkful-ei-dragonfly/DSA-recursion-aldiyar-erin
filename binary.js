/* eslint-disable strict */
const binarize = function (number) {
  if (number <= 0) {
    return '';
  }
  let binary = Math.floor(number % 2);
  return binarize(Math.floor(number/2)) + binary;
};

console.log(binarize(3));
console.log(binarize(25));