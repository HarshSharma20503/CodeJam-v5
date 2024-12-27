import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { AsyncHandler } from "../utils/AsyncHandler.js";
import { Chat } from "../models/chatModel.js";
import pinecone from "../config/pinecone.js";
import GeminiModel from "../config/gemini.js";
import { createGeminiPrompt } from "../utils/gemini.js";

export const askAi = AsyncHandler(async (req, res, next) => {
  console.log("******** askAi Function ********");
  console.log(req.body);
  const { prompt, lectureId } = req.body;

  if (!prompt || !lectureId) {
    return next(new ApiError(400, "Prompt and lectureId are required"));
  }

  console.log("req.user:", req.user);

  let chat = await Chat.find({ userId: req.user._id, lectureId }).limit(5);

  console.log("Chat:", chat);

  if (!chat) {
    return next(new ApiError(404, "Chat not found"));
  }

  if (chat.length === 0) {
    chat = await Chat.create({
      userId: req.user._id,
      lectureId,
      messages: [],
    });
  }

  console.log("Chat:", chat);
  chat = chat[0];

  chat.messages.push({
    type: "user",
    message: prompt,
  });

  // Corrected Pinecone embedding code
  const index = pinecone.index("testing"); // Replace with your actual index name

  const embedding = await pinecone.inference.embed(
    "multilingual-e5-large",
    [prompt],
    {
      inputType: "query",
    }
  );

  const queryResponse = await index.namespace("example-namespace").query({
    topK: 3,
    vector: embedding[0].values,
    includeValues: false,
    includeMetadata: true,
    filter: {
      lectureId: { $eq: lectureId },
    },
  });

  console.log("Query Response:", queryResponse.matches[0].metadata.text);

  // Send the prompt to the AI model and get the response
  const recentMessages = chat.messages.map((msg) => msg.message).join("\n");
  const fullPrompt = createGeminiPrompt(
    recentMessages,
    prompt,
    queryResponse.matches[0].metadata.text
  );

  const response = await GeminiModel.generateContent(fullPrompt);

  console.log("AI Response:", response.response.text());

  chat.messages.push({
    type: "ai",
    message: response.response.text(),
  });

  await chat.save();

  res
    .status(200)
    .json(new ApiResponse(200, { answer: response.response.text() }));
});
