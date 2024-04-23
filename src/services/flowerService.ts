import {faker } from "@faker-js/faker";


//Rose flower
export const generateRoseFlowerData = (): FlowerData => {
  // Generate random flower data
  const generatedFlowerData: FlowerData =  {
    name: "Rose",
    colors: faker.helpers.arrayElements(["Red", "White", "Pink", "Yellow"]),
    temperature: faker.number.int({ min: 15, max: 25 }),
    waterNeeds: faker.number.int({ min: 1, max: 5 }),
    fertilizerNeeds: faker.number.int({ min: 2, max: 78 }),
    sunHour: faker.number.int({ min: 4, max: 6 }),
    growthRate: faker.helpers.arrayElement(["Moderate", "Fast"]),
    bloomSeason: faker.helpers.arrayElements(["Spring", "Summer"]),
  };

  // Return flower data
  return generatedFlowerData;
};


//Lily Flower
export const generateLilyFlowerData = (): FlowerData => {
  const generatedFlowerData: FlowerData =  {
    name: "Lily",
    colors: faker.helpers.arrayElements(["White", "Yellow", "Pink"]),
    temperature: faker.number.int({ min: 16, max: 24 }),
    waterNeeds: faker.number.int({ min: 3, max: 6 }),
    fertilizerNeeds: faker.number.int({ min: 2, max: 5 }),
    sunHour: faker.number.int({ min: 4, max: 6 }),
    growthRate: faker.helpers.arrayElement(["Moderate", "Fast"]),
    bloomSeason: ["Summer"],
  };

  return generatedFlowerData;
};


//Tulip Flower
export const generateTulipFlowerData = (): FlowerData => {
  const generatedFlowerData: FlowerData =  {
    name: "Tulip",
    colors: faker.helpers.arrayElements(["Red", "Yellow", "Pink", "White", "Purple", "Orange"]),
    temperature: faker.number.int({ min: 10, max: 18 }),
    waterNeeds: faker.number.int({ min: 2, max: 5 }),
    fertilizerNeeds: faker.number.int({ min: 1, max: 3 }),
    sunHour: faker.number.int({ min: 3, max: 5 }),
    growthRate: faker.helpers.arrayElement(["Slow", "Moderate"]),
    bloomSeason: ["Spring"],
  };

  return generatedFlowerData;
};



//Orchid Flower
export const generateOrchidFlowerData = (): FlowerData => {
  const generatedFlowerData: FlowerData =  {
    name: "Orchid",
    colors: faker.helpers.arrayElements(["White", "Pink", "Purple"]),
    temperature: faker.number.int({ min: 15, max: 29 }),
    waterNeeds: faker.number.int({ min: 1, max: 4 }),
    fertilizerNeeds: faker.number.int({ min: 1, max: 2 }),
    sunHour: faker.number.int({ min: 2, max: 4 }),
    growthRate: faker.helpers.arrayElement(["Slow"]),
    bloomSeason: ["All year"],
  };

  return generatedFlowerData;
};



//Hydrangea Flower
export const generateHydrangeaFlowerData = (): FlowerData => {
  const generatedFlowerData: FlowerData =  {
    name: "Hydrangea",
    colors: faker.helpers.arrayElements(["Blue", "Pink", "White", "Purple"]),
    temperature: faker.number.int({ min: 14, max: 20 }),
    waterNeeds: faker.number.int({ min: 4, max: 8 }),
    fertilizerNeeds: faker.number.int({ min: 2, max: 6 }),
    sunHour: faker.number.int({ min: 2, max: 5 }),
    growthRate: faker.helpers.arrayElement(["Moderate"]),
    bloomSeason: ["Spring", "Summer"],
  };

  return generatedFlowerData;
};