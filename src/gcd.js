const gcd = (a, b) => {
  if (!b) {
    return a.toString();
  }

  return gcd(b, a % b);
};

export default gcd;
