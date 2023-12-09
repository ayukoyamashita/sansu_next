import TQuestion from "../ types/TQuestion";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * (max - 1)) + 1;
}

export function createQuestion(): TQuestion {
  const multiplicand = getRandomInt(10);
  const multiplier = getRandomInt(10);
  const product = multiplicand * multiplier;
  return {
    multiplicand,
    multiplier,
    product
  };
}