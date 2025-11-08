import express from "express";
import cors from "cors";
import tripRouter from "./routes/trip.js";

const app = express();

app.use(cors());
app.use(express.json());

// mount routes
app.use("/tours", tripRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(80, () => console.log(`Server running on port 80`));
