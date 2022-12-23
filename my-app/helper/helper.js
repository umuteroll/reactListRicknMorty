const getCharacterIdString = (arr) => {
  const lastNumbers = arr.map(str => str.split("/").pop());
  const lastNumbersString = lastNumbers.join(", ");
  return lastNumbersString;
}

export { getCharacterIdString }