function calculateArea(r) {
  return Math.PI * r ** 2;
}

function sayHi(name) {
  return `hello ${name}`;
}

// module.exports = calculateArea;
// module.exports = sayHi;

module.exports = {
  calculateArea,
  sayHi,
  firstName: "hasti",
};
