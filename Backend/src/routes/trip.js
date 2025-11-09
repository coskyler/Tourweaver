import express from "express";
import parameterize from "../jobs/parameterize_request.js"
import searchPlaces from "../jobs/search_places.js"

const router = express.Router();

router.get("/", (req, res) => {
  res.send("get my tours");
});

router.get("/:tourId", (req, res) => {
  res.send("get tour by id");
});

router.post("/", async (req, res) => {
  const { userPrompt, startingCoords, targetCoords, budget, transportationMethod, tourMinutes } = req.body;

  //1. parameterize the user request
  const params = await parameterize(userPrompt)

  console.log(params);

  //2. find candidates using google places API with the type parameters
  const places = await searchPlaces(params, startingCoords, targetCoords)

  res.json(places);

});

export default router;