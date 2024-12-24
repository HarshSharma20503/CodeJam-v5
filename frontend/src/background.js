chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "download") {
    console.log("Received download request", request);
    chrome.downloads.download(
      {
        url: request.url,
        filename: request.filename,
        saveAs: false,
      },
      (downloadId) => {
        if (chrome.runtime.lastError) {
          sendResponse({ success: false, error: chrome.runtime.lastError });
          return;
        }

        // Listen for download completion
        chrome.downloads.onChanged.addListener(function downloadListener(
          delta
        ) {
          if (delta.id === downloadId && delta.state?.current === "complete") {
            chrome.downloads.onChanged.removeListener(downloadListener);
            sendResponse({ success: true, downloadId });
          }
        });
      }
    );

    return true;
  }
});
