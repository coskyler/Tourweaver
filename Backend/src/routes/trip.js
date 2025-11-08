import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("get my tours");
});

router.get("/:tourId", (req, res) => {
  res.send("get tour by id");
});

router.post("/", (req, res) => {
  res.send("create new tour");
});

export default router;