import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const navigate = useNavigate();
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleResponseChange = (e) => {
    setResponse(e.target.value);
  };

  const handleSave = () => {
    console.log("Query Saved:", query);
    console.log("Response Saved:", response);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="w-[400px] h-[600px] bg-gradient-to-b from-[#1e1e2f] via-[#302b63] to-[#24243e] shadow-lg flex flex-col overflow-hidden rounded-md">
        {/* Header */}
        <div className="p-4 bg-[#302b63] text-white relative">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate("/lecture")}>
              <i className="ri-arrow-left-line text-xl text-gray-400 cursor-pointer hover:text-yellow-400 transition ease-in-out"></i>
            </button>
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
            BST Graph Lecture 22
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          {/* Response Box (Now at the Top) */}
          <div className="p-3 bg-[#302b63] text-white mb-4 flex-1">
            <textarea
              value={response}
              onChange={handleResponseChange}
              className="w-full p-2 bg-[#1e1e2f] border border-opacity-20 border-yellow-400 rounded-md text-white"
              rows="6"
              placeholder="Response from Gemini API"
            />
          </div>

          {/* Query Input and Ask Button at the Bottom */}
          <div className="pt-4">
            <input
              id="query"
              type="text"
              value={query}
              onChange={handleQueryChange}
              placeholder="Type your query..."
              className="w-full p-2 bg-[#1e1e2f] border border-yellow-400 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-2" // Reduced margin here
            />
            <button
              onClick={handleSave}
              className="bg-yellow-400 text-[#302b63] rounded-md hover:bg-yellow-500 
              transition w-40 mt-2 px-5 py-2" // Reduced margin here
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
