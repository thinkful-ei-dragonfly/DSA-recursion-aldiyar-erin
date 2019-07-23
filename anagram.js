/* eslint-disable strict */
// An anagram is any word or phrase that uses the letters of a given("subject") word or phrase in another, rearranged order.Write a
// function that creates an anagram list, listing all the rearrangements of a given word.For example,
//   if the user types "east", the program should list all 24 permutations, including "eats", "etas", "teas", and non - words like "tsae".

// Hint: For your algorithm, you might want to think about a prefix and use that to create the new words.For example, given "east", use "e"
// as a prefix and place it in front of all 6 permutations of "ast"—
// "ast", "ats", "sat", "sta", "tas", and "tsa".This will give you the words "east", "eats", "esat", "esta", "etas", and "etsa".Continue this way until you find all the anagrams
// for "east".Then you can use "a"
// as a prefix and permute the remaining words "est".For "east", there should be 24 words.


function anagrams(prefix, str) {
  if (str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i + 1);
      anagrams(prefix + currentLetter, previousLetters + afterLetters);
    }
  }
}

function printAnagram(word) {
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);

}


//break string into letters
//grab first letter as first
//assign the rest as the possibilites
//grab second letter as first
//assign the rest as possibilities
//grab each letter as first until the last letter
//assign the rest as possibilities??? struggle is real