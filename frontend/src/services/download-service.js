import { API_BASE_URL } from "../config/constants.js";

export const handleDownload = async (request, sender, sendResponse) => {
  try {
    console.log("Processing download request:", request);
    const { url, filename } = request;

    // First fetch the file
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Get the file content as blob
    const blob = await response.blob();
    console.log("File fetched successfully, uploading to server...");

    // Upload to server
    const uploadResult = await uploadToServer(blob, filename);

    // Send success response
    sendResponse({
      success: true,
      message: "File processed successfully",
      uploadResult,
    });
  } catch (error) {
    console.error("Error in handleDownload:", error);
    sendResponse({
      success: false,
      error: error.message,
      stage: error.stage || "processing",
    });
  }
};

const uploadToServer = async (blob, filename) => {
  const formData = new FormData();
  formData.append("file", blob, filename);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw Object.assign(
      new Error(`Upload failed with status: ${response.status}`),
      { stage: "upload" }
    );
  }

  return await response.json();
};
