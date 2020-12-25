//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, age) => {
  const ages = {
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
    earth: 1.0,
  };

  let ageInYears = (age / 31557600 / ages[planet]).toFixed(2);
  //test requires number - convert the result to number
  return Number(ageInYears);
};
