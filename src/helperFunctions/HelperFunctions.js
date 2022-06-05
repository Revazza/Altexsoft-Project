export const stringContainsNumber = (input) => {
  let str = String(input);
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str.charAt(i)) && !(str.charAt(i) === " ")) {
      return true;
    }
  }
  return false;
};
