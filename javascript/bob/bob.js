//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (message.charAt(message.length - 1) == "?") return "Sure.";
  else if (
    message.toUpperCase() == message &&
    message.charAt(message.length - 1) == "?"
  )
    return "Calm down, I know what I'm doing!";
  else if (message.toUpperCase() == message) return "Whoa, chill out!";
};
