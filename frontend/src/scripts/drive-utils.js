export const getFileId = (url) => {
  const patterns = [/\/file\/d\/([^/]+)/, /id=([^&]+)/, /\/d\/([^/]+)/];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }
  return null;
};

export const getDownloadLink = (fileId) => {
  return `https://drive.usercontent.google.com/download?id=${fileId}&export=download`;
};

export const downloadFile = async (url, filename) => {
  try {
    // Open the file in a new window/tab
    // This will use the user's existing Google authentication
    window.open(url, "_blank");

    // Show a message to the user
    console.log("Please use the Google Drive interface to download the file");
    return true;
  } catch (error) {
    console.error("Error opening file:", error);
    return false;
  }
};

export const getDriveLinks = () => {
  const elements = document.getElementsByClassName(
    "qhnNic LBlAUc Aopndd TIunU"
  );
  const anchorTags = [];

  Array.from(elements).forEach((element) => {
    const anchors = element.getElementsByTagName("a");
    Array.from(anchors).forEach((anchor) => {
      if (anchor.href.includes("drive.google.com")) {
        anchorTags.push({
          href: anchor.href,
          text: anchor.textContent.trim(),
        });
      }
    });
  });

  return anchorTags;
};
