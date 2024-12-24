import {
  createButton,
  createStatusDiv,
  updateStatus,
} from "./scripts/ui-utils.js";
import {
  getFileId,
  getDownloadLink,
  getDriveLinks,
} from "./scripts/drive-utils.js";
import { downloadFile } from "./scripts/file-utils.js";

const init = () => {
  if (document.getElementById("my-extension-root")) return;

  // Create root div
  const root = document.createElement("div");
  root.id = "my-extension-root";
  document.body.appendChild(root);

  // Create UI elements
  const statusDiv = createStatusDiv();
  const button = createButton();

  // Add click event handler
  button.addEventListener("click", async () => {
    const anchorTags = getDriveLinks();
    updateStatus(statusDiv, ` Found ${anchorTags.length} files to process`);

    console.log(anchorTags);

    // Process files sequentially
    for (let i = 0; i < anchorTags.length; i++) {
      const { href, text } = anchorTags[i];

      const fileId = getFileId(href);

      console.log("href", href);
      console.log("text", text);
      console.log("fileId", fileId);

      if (fileId) {
        updateStatus(
          statusDiv,
          `Processing file ${i + 1} of ${anchorTags.length}: ${text}`
        );
        const downloadUrl = getDownloadLink(fileId);
        console.log("downloadUrl", downloadUrl);

        try {
          await downloadFile(downloadUrl, text);
          updateStatus(
            statusDiv,
            `Successfully processed ${i + 1} of ${anchorTags.length} files`
          );
          return;
        } catch (error) {
          updateStatus(
            statusDiv,
            `Error processing file ${i + 1}: ${error.message}`
          );
        }
      }
      break;
    }

    // updateStatus(statusDiv, "All files processed");
    // setTimeout(() => {
    //   statusDiv.style.display = "none";
    // }, 3000);
  });

  // Append elements to root
  root.appendChild(statusDiv);
  root.appendChild(button);
};

// Run initialization
init();
