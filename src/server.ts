import express from "express";
import router from "./routes/route.js";
import cors from "cors";


// We will create an express app
const app = express();

app.use(cors())
// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());


// We define the route base for both flower and weather
app.use("/api", router);

// Start the express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});