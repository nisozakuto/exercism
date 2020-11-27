//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (data) => {
  let newRna = "";
  if (!data.length) return "";
  else {
    for (let i = 0; i < data.length; i++) {
      // console.log(data.slice(i));
      let currentLetter = data.slice(i, i + 1);
      if (currentLetter === "C") newRna += "G";
      if (currentLetter === "G") newRna += "C";
      if (currentLetter === "T") newRna += "A";
      if (currentLetter === "A") newRna += "U";
    }
    return newRna;
  }
};
