const prime = (a) => {
  if (a === 2 || a === 3) {
    return true;
  }
  if (a > 1 && (a % 2 !== 0 && a % 3 !== 0)) {
    return true;
  }
  return false;
};
export default prime;
