// content-script.js

const init = () => {
  // Check if root already exists
  if (document.getElementById("my-extension-root")) return;

  // Create root div
  const root = document.createElement("div");
  root.id = "my-extension-root";
  document.body.appendChild(root);

  // Create content div with styles
  const contentDiv = document.createElement("div");

  // Apply styles
  Object.assign(contentDiv.style, {
    position: "fixed",
    top: "10px",
    right: "10px",
    zIndex: "999999",
    background: "white",
    padding: "10px",
    border: "1px solid black",
  });

  // Create and append h1
  const heading = document.createElement("h1");
  heading.textContent = "Hello, world!";
  contentDiv.appendChild(heading);

  // Append content div to root
  root.appendChild(contentDiv);
};

// Run initialization
init();
