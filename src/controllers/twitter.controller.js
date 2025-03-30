import { generateTweet } from "../services/openAi.service.js";
import { postTweet } from "../services/twitter.service.js";
import { validateCaption } from "../validations/caption.validation.js";

// Controller function to generate and post a tweet
export async function generateAndPostTweet(req, res) {
  try {
    // Validate caption
    const { caption } = validateCaption(req.body);

    // Generate tweet
    const generatedTweet = await generateTweet(caption);

    // Post tweet
    const tweetId = await postTweet(generatedTweet);

    res.status(200).json({
      message: "Tweet generated and posted successfully",
      tweet: generatedTweet,
      tweetId,
    });
  } catch (error) {
    console.error("Tweet generation error:", error);

    if (error instanceof Error) {
      res.status(500).json({
        message: "Failed to generate or post tweet",
        error: error.message,
      });
    } else {
      res.status(500).json({
        message: "An unknown error occurred",
      });
    }
  }
}

// Export as default if needed
export default { generateAndPostTweet };
