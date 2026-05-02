import animals from "@/data/animals.json";

const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

export const getAllAnimals = async () => {
  await wait(700);
  return animals;
};

export const getFeaturedAnimals = async () => {
  await wait(500);
  return animals.slice(0, 4);
};

export const getAnimalById = async (id) => {
  await wait(450);
  return animals.find((animal) => animal.id === Number(id));
};
