import { faker } from "@faker-js/faker";


// Function to generate a three-day temperature forecast
export const generateLondonWeatherData = () => {
  return {
    dayOne: faker.number.int({ min: -5, max: 35 }),
    dayTwo: faker.number.int({ min: -5, max: 35 }),
    dayThree: faker.number.int({ min: -5, max: 35 }),
  };
};


export const generateDublinWeatherData = (): WeatherData => {
  // Generate random weather data
  const generatedWeatherData: WeatherData = {
    temperature: faker.number.int({ min: -15, max: 30 }),
    humidity: faker.number.int({ min: 79, max: 86 }),
    wind: faker.number.int({ min: 2, max: 78 }),
    rain: faker.number.int({ min: 65, max: 75 }),
  };

  // Return weather data
  return generatedWeatherData;
};
  

  export const generateDubaiWeatherData = (): WeatherData => {
    // Generate random weather data
    const generatedWeatherData: WeatherData = {
      temperature: faker.number.int({ min: -15, max: 30 }),
      humidity: faker.number.int({ min: 79, max: 86 }),
      wind: faker.number.int({ min: 2, max: 78 }),
      rain: faker.number.int({ min: 65, max: 75 }),
    };

    // Return weather data
  return generatedWeatherData;
};
  
    export const generateParisWeatherData = (): WeatherData => {
      // Generate random weather data
      const generatedWeatherData: WeatherData = {
        temperature: faker.number.int({ min: -15, max: 30 }),
        humidity: faker.number.int({ min: 79, max: 86 }),
        wind: faker.number.int({ min: 2, max: 78 }),
        rain: faker.number.int({ min: 65, max: 75 }),
      };

  // Return weather data
  return generatedWeatherData;
};
