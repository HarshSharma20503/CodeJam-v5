export const downloadFile = async (url, filename) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();

    // Create download link
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = filename;

    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);

    // Send to server
    await sendToServer(blob, filename);

    return true;
  } catch (error) {
    console.error(`Error downloading ${filename}:`, error);
    return false;
  }
};

export const sendToServer = async (blob, filename) => {
  try {
    const formData = new FormData();
    formData.append("file", blob, filename);

    const response = await fetch("YOUR_SERVER_URL", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error uploading ${filename}:`, error);
    throw error;
  }
};
