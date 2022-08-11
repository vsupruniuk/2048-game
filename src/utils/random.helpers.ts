export const getRandomIndex = () => {
  return Math.floor(Math.random() * 4);
};

export const getRandomValue = () => {
  const randomNumber = Math.ceil(Math.random() * 10);

  return randomNumber === 10 ? 4 : 2;
};

export const selectRandomLine = () => {
  return Math.random();
};
