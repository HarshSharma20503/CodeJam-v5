// Listen for messages from content script or popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Log the message and sender information
  console.log("Message received:", message);
  console.log("Sender:", sender);

  // If you want to send a response back
  sendResponse({ received: true });

  // Return true if you're going to send a response asynchronously
  return true;
});

// Log when the background script loads
console.log("Background script loaded!");
