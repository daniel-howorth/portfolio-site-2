export function elementsExist(...elements) {
  if (elements.every((element) => element)) {
    return true;
  } else {
    console.log(`Some elements don't exist.`);
    return false;
  }
}
