# CODEJAM V5

## Basic Idea

A Chrome Extension that processes all classroom content and classifies it into lectures, assignments, and announcements sections. It also allows users to add tags for classification and filtering based on lecture difficulty and exams (T1, T2, T3). Additionally, a chatbot feature is included, which can summarize content, clear doubts, and assist with lecture-related queries.

## Tech Stack

- **React**: Frontend components
- **Tailwind CSS**: Styling
- **Vite with Vite's CRXJS plugin**: Build tools and configuration
- **Express and Node.js**: Backend
- **MongoDB**: Database
- **Langchain**: RAG-based Chatbot using Gemini API

## Expected Frontend Screens

- Sign-Up and Login Screen
- Home Screen
- Lecture Screen
- Chatbot Screen

## Expected Backend Functionality

- **Authentication Routes**: Login and Sign-Up
- **User Information Routes**:
  - Processed classroom information
  - Saved chats
- **Chatbot Functionality**: Provide responses

## Steps to Run the Project

### 1. Clone the Repository

Run the following command in your terminal to clone the repository locally:

```bash
git clone https://github.com/HarshSharma20503/CodeJam-v5.git
```

Now navigate to the project using the following command:

```bash
cd CODEJAM-V5
```

### 2. Set Up the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create a `.env` file in the backend directory:
   ```bash
   touch .env
   ```
3. Copy the contents of the `.env.example` file into `.env`.
4. Set up a MongoDB server and obtain the `Mongo_URI`. Paste the URI into the `.env` file.
5. Ensure the `.env` file contains the following:
   - `Mongo_URI`: MongoDB connection string
   - `PORT`: 8000
   - `JWT_SECRET`: exampleSecret
6. Start the backend server:
   ```bash
   npm run dev
   ```

### 3. Set Up the Frontend

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Build the frontend to create the `dist` folder:
   ```bash
   npm run build
   ```

### 4. Add the Extension to the Browser

1. Open your browser and navigate to the extensions page:
   - For Chrome: `chrome://extensions`
   - For Brave: `brave://extensions`
2. Enable **Developer Mode** (usually found in the top right corner).
3. Click on **Load Unpacked**.
4. Select the `dist` folder generated in the frontend directory.
5. The extension is now added and ready to use.

### 5. Using the Extension

1. Sign up with an email that uses the `@mail.jiit.ac.in` domain.
2. Log in and start using the extension features.

---

## Notes

- Ensure both the frontend and backend servers are running.
- The backend runs on port 8000 by default. Ensure there are no conflicts.
- For troubleshooting, ensure MongoDB is running and accessible.
