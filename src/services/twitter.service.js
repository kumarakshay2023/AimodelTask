import { TwitterApi } from "twitter-api-v2";
import { config } from "../configs/config.js";

// Create Twitter client instance
const twitterClient = new TwitterApi({
  appKey: config.twitter.appKey,
  appSecret: config.twitter.appSecret,
  accessToken: config.twitter.accessSecret,
  accessSecret: config.twitter.accessSecret,
});

// Function to post a tweet
export async function postTweet(tweet) {
  try {
    const result = await twitterClient.v2.tweet(tweet);
    return result.data.id;
  } catch (error) {
    console.error("Twitter posting error:", error);
    throw new Error("Failed to post tweet");
  }
}

// Export as default if needed
export default { postTweet };
