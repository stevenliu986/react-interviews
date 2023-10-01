import elements from "./elements";

const breakify = (name) => {
  let result = [];
  for (let i = 0; i < name.length; i++) {
    const oneChar = name[i].toUpperCase();
    const twoChar = `${oneChar}${name[i + 1]}`;

    if (elements.includes(twoChar)) {
      result = [name.slice(0, i), twoChar, name.slice(i + 2)];
      break;
    }

    if (elements.includes(oneChar)) {
      result = [name.slice(0, i), oneChar, name.slice(i + 1)];
      break;
    }
  }

  if (!result.length) {
    result.push(name);
  }
  return result;
};

export default breakify;
