import React, { useState, useEffect, useContext } from "react";
import "remixicon/fonts/remixicon.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { PostApiCall } from "../utils/apiCall.js";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [chats, setChats] = useState([]);
  const { user, selectedLecture } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchChats = async () => {
      try {
        const response = await PostApiCall("http://localhost:8000/api/chats/", {
          lectureId: selectedLecture?.id,
        });
        setChats(response.data.chat);
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSave = () => {
    console.log("Query Saved:", query);
  };

  const handleAsk = async () => {
    if (!query.trim()) return;

    try {
      console.log("Query:", query);
      console.log("Selected Lecture:", selectedLecture);
      const response = await PostApiCall(
        "http://localhost:8000/api/chatbot/ask",
        {
          prompt: query,
          lectureId: selectedLecture?._id,
        }
      );

      console.log("Response:", response.data);

      setChats((prev) => [
        ...prev,
        {
          type: "user",
          message: query,
        },
        {
          type: "ai",
          message: response?.data?.answer,
        },
      ]);

      setQuery("");
    } catch (error) {
      console.error("Error sending query:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="w-[400px] h-[600px] bg-gradient-to-b from-[#1e1e2f] via-[#302b63] to-[#24243e] shadow-lg flex flex-col overflow-hidden rounded-md">
        {/* Header */}
        <div className="p-4 bg-[#302b63] text-white relative">
          <div className="flex items-center space-x-2">
            <i
              className="ri-arrow-left-line text-xl text-gray-400 cursor-pointer hover:text-yellow-400 transition ease-in-out"
              onClick={() => navigate(-1)}
            ></i>
            <h2 className="text-md font-semibold m-0">Chatbot</h2>
          </div>
          <button
            onClick={handleSave}
            className="absolute top-2 right-4 bg-yellow-400 text-[#000000] rounded-md hover:bg-yellow-500 transition my-2 px-4 py-0"
            style={{
              fontSize: "12px",
              width: "60px",
              height: "25px",
              lineHeight: "25px",
            }}
          >
            Save
          </button>
        </div>

        {/* File Name Section */}
        <div className="relative p-4">
          <div className="text-xl font-bold text-center text-yellow-400 bg-[#24243e] p-3 rounded-xl border border-yellow-400">
            {selectedLecture?.name || "BST Graph Lecture 22"}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {chats?.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  chat.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    chat.type === "user"
                      ? "bg-yellow-400 text-black ml-auto"
                      : "bg-[#302b63] text-white mr-auto"
                  }`}
                >
                  {chat.message}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Query Input */}
        <div className="p-4 bg-[#1e1e2f]">
          <div className="flex space-x-2">
            <input
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder="Type your query..."
              className="flex-1 p-2 bg-[#302b63] border border-yellow-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              onClick={handleAsk}
              className="bg-yellow-400 text-[#302b63] rounded-md hover:bg-yellow-500 transition px-4"
            >
              Ask
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
