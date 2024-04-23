import { param } from "express-validator";

/**
 * Validates the city name param
 * @returns {ValidationChain} - Express validator validation chain
 */

export const validateCityName = param("city")
  // We will use the isString method to check if the city param is a string
  .isString()
  // We will use the isIn method to check if the city param is either london or dublin
  .isIn(["london", "dublin"])
  // We will use the withMessage method to set a custom error message
  .withMessage("City name must be either london or dublin");

  
export const validateFlowerName = param("flower")
  // We will use the isString method to check if the flower param is a string
  .isString()
  // We will use the isIn method to check if the flower param is recognized
  .isIn(["rose", "lily", "tulip", "orchid", "hydrangea"])
  // We will use the withMessage method to set a custom error message
  .withMessage("Flower name must be either Rose, Lily, Tulip, Orchid, or Hydrangea");
