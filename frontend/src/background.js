// background.js

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "download") {
    console.log("Received download request", request);

    // First fetch the file content
    fetch(request.url)
      .then((response) => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      })
      .then(async (blob) => {
        try {
          console.log("Got the Blob:");
          // First upload to server
          const formData = new FormData();
          formData.append("file", blob, request.filename);

          const uploadResponse = await fetch("http://localhost:8000/upload", {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
              // Don't set Content-Type as FormData will set it automatically with boundary
            },
          });

          console.log("Upload response:", uploadResponse);

          // if (!uploadResponse.ok) {
          //   throw new Error(`Upload failed: ${uploadResponse.status}`);
          // }

          // Then download for user
          // const blobUrl = URL.createObjectURL(blob);
          // chrome.downloads.download(
          //   {
          //     url: blobUrl,
          //     filename: request.filename,
          //     saveAs: false,
          //   },
          //   (downloadId) => {
          //     URL.revokeObjectURL(blobUrl);

          //     if (chrome.runtime.lastError) {
          //       sendResponse({
          //         success: false,
          //         error: chrome.runtime.lastError,
          //         stage: "download",
          //       });
          //       return;
          //     }

          //     chrome.downloads.onChanged.addListener(function downloadListener(
          //       delta
          //     ) {
          //       if (
          //         delta.id === downloadId &&
          //         delta.state?.current === "complete"
          //       ) {
          //         chrome.downloads.onChanged.removeListener(downloadListener);
          //         sendResponse({
          //           success: true,
          //           downloadId,
          //           message: "File downloaded and uploaded successfully",
          //         });
          //       }
          //     });
          //   }
          // );
        } catch (error) {
          console.error("Upload/Download error:", error);
          sendResponse({
            success: false,
            error: error.message,
            stage: "upload",
          });
        }
      })
      .catch((error) => {
        console.error("Initial fetch error:", error);
        sendResponse({
          success: false,
          error: error.message,
          stage: "initial-fetch",
        });
      });

    return true; // Keep message channel open for async response
  }
});
