import { Request, Response } from "express";
import {
  generateRoseFlowerData,
  generateLilyFlowerData,
  generateHydrangeaFlowerData,
  generateOrchidFlowerData,
  generateTulipFlowerData,
} from "../services/flowerService.js";
import { validationResult } from "express-validator";

/**
 * Gets the flower data for a ceratin flower
 * @param req the request object
 * @param res the response object
 */

export const getFlowerData = async (req: Request, res: Response) => {
    // We will use the validationResult function to check if there are any validation errors
    const errors = validationResult(req);
  
    // If there are validation errors, we will log them and send a 400 status code
    if (!errors.isEmpty()) {
      console.error("Validation error", errors.mapped());
      res.status(400).json({ errors: errors.array() });
      return;
    }
  
    // We will use a try catch block to catch any errors
    try {
      // Get the flower name param from the request
      const { flower } = req.params;
      console.log(flower);
  
      // We will create a variable with a type of FlowerData
      let finalFlowerData: FlowerData;
  
  // We will use a switch statement to check which flower was passed in
  switch (flower.toLowerCase()) {
    case "rose":
      finalFlowerData = generateRoseFlowerData();
      break;
    case "lily":
      finalFlowerData = generateLilyFlowerData();
      break;
    case "tulip":
      finalFlowerData = generateTulipFlowerData();
      break;
    case "orchid":
      finalFlowerData = generateOrchidFlowerData();
      break;
    case "hydrangea":
      finalFlowerData = generateHydrangeaFlowerData();
      break;
    default:
      // If the flower is not recognized, we will throw an error
        res.status(404).send("Flower not found");
      }
  
      // We will return the flower data as JSON
      res.status(200).json(finalFlowerData);
    } catch (error) {
      // If there is an error, we will log it and send a 500 status code
      res.status(500).send("Error in fetching flower data");
    }
  };
  
