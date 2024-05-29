import express from "express";
import bodyParser from "body-parser";
import { generateChefDescription, translateBiography } from "./openai.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.post("/chefs/generate-description", async (req, res) => {
  const {
    chefFullName,
    cuisineStylesAndTechniques,
    mostPopularDish,
    background,
    vision,
    tone,
    language,
  } = req.body;

  const chefDescription = await generateChefDescription(
    chefFullName,
    cuisineStylesAndTechniques,
    mostPopularDish,
    background,
    vision,
    tone,
    language
  );
  res.send(chefDescription.message);
});

app.post("/chefs/generate-translations", async (req, res) => {
  const { biography } = req.body;

  const biographies = await translateBiography(biography);
  res.send(biographies);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
