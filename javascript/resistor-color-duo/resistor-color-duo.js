//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (array) => {
  let returnNumber = 0;
  for (let i = 0; i < 2; i++) {
    if (array[i] == "black") returnNumber += 0;
    if (array[i] == "brown") returnNumber += 1;
    if (array[i] == "red") returnNumber += 2;
    if (array[i] == "orange") returnNumber += 3;
    if (array[i] == "yellow") returnNumber += 4;
    if (array[i] == "green") returnNumber += 5;
    if (array[i] == "blue") returnNumber += 6;
    if (array[i] == "violet") returnNumber += 7;
    if (array[i] == "grey") returnNumber += 8;
    if (array[i] == "white") returnNumber += 9;
    if (i == 0) returnNumber = returnNumber * 10;
  }
  return returnNumber;
};
