# Twitter Post Automation with LLM

## Overview
This project integrates an LLM (OpenAI's GPT) to summarize Instagram captions into concise tweets and posts them to X.com (formerly Twitter) via the X.com API. The system consists of:
- An LLM-based summarization module
- An API endpoint to trigger tweet posting
- Integration with the X.com API
- Unit tests for summarization and tweet posting

## Features
- Summarizes Instagram captions into Twitter-friendly posts.
- Ensures tweets are within the 280-character limit.
- Posts generated tweets directly to an X.com account.
- Provides a REST API endpoint (`/api/twitter/generate-tweet`) for automation.

## Technologies Used
- **Node.js**: Backend runtime
- **Express.js**: API framework
- **OpenAI API**: LLM for tweet summarization
- **Twitter API v2**: Posting tweets to X.com
- **dotenv**: Environment variable management

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Clone the Repository
```sh
git clone https://github.com/kumarakshay2023/AimodelTask.git
cd AimodelTask
```

### Install Dependencies
```sh
npm install
```

### Environment Variables
Create a `.env` file in the root directory and configure the following:
```
OPENAI_API_KEY=your_openai_api_key
TWITTER_APP_KEY=your_twitter_app_key
TWITTER_APP_SECRET=your_twitter_app_secret
TWITTER_ACCESS_TOKEN=your_twitter_access_token
TWITTER_ACCESS_SECRET=your_twitter_access_secret
PORT=5000
```

### Start the Server
```sh
npm start
```
Server will run on `http://localhost:5000/`.

---

## API Endpoints
### Generate and Post a Tweet
**Endpoint:** `POST /api/twitter/generate-tweet`

#### Request Body:
```json
{
  "caption": "This is an Instagram caption that needs summarization."
}
```

#### Response:
```json
{
  "message": "Tweet generated and posted successfully",
  "tweet": "Summarized tweet text here",
  "tweetId": "123456789"
}
```

---

## Project Structure
```
.
├── configs/
│   ├── config.js
├── controllers/
│   ├── twitter.controller.js
├── routes/
│   ├── twitter.route.js
├── services/
│   ├── openAi.service.js
│   ├── twitter.service.js
├── validations/
│   ├── caption.validation.js
├── .env
├── index.js
├── package.json
├── README.md
```

---

## Testing
Run unit tests to verify the summarization and tweet posting workflows:
```sh
npm test
```

---

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit changes.
4. Push to your fork.
5. Open a pull request.

---

## Created by Akshay Kumar

