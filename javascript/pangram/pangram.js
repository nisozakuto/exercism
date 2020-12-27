//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (input) => {
  if (input.length < 26) return false;

  // let isPangram = true;
  const alphabet = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "l",
    "k",
    "j",
    "h",
    "g",
    "f",
    "d",
    "s",
    "a",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];
  let lower = input.toLowerCase();

  for (let i = 0; i < alphabet.length; i++) {
    if (lower.includes(alphabet[i]) == false) return false;
  }
  return true;
};
