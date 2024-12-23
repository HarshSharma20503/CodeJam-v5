# CODEJAM V5

## Basic Idea

A Chrome Extension that is able to process all the classroom content and classify it accordingly into lectures, assignment and annoucements section. Ability to add tags enabling user to classify and filter according to the difficult of lecture and Exams(T1, T2, T3). Chatbot feature from which you can ask to summarise, clear your doubts accordingly related to the lecture.

## Expected Tech Stack

- React for frontend components
- Tailwind for styling
- Vite and Vite's CRXJS plugin for build tools and configuration.
- Express and Node for backend
- MongoDB for Database
- Langchain for RAG based Chatbot using Gemini API.

## Expected Frontend Screens

- Sign Up Screen
- Login Screen
- Home Screen
- Classroom Screen
- ChatBot Screen

## Expected Backend Functionality

- Login and Signup routes
- User Information routes
  - Processed classroom Information
  - saved chats
- Chatbot responses

## Step to run the extension

- In terminal go to the frontend folder
- run command `npm run build`
- a dist folder will be created
- open your browser and go to `brave://extension` or `chrome://extension`
- turn on the developer mode on the right (most probably)
- click on load unpack and select the dist file that was generated when you ran npm run build command.
- this will install the extension onto your browser.
- You can now open the popup and also content script will be injected according to matched url.
