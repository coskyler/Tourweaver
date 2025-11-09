import express from "express";
import cors from "cors";
import tripRouter from "./routes/trip.js";

const app = express();

app.use(
  cors({
    origin: ["https://tourweaver.coskyler.com", "http://localhost:3000"],
  })
);
app.use(express.json());

// mount routes
app.use("/tours", tripRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(80, () => console.log("Server running on port 80"));