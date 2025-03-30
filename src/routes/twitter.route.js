import express from "express";
import { generateAndPostTweet } from "../controllers/twitter.controller.js";

const twitterPostRoutes = express.Router();

// Route to generate and post a tweet
twitterPostRoutes.post("/generate-tweet", generateAndPostTweet);

export default twitterPostRoutes;
