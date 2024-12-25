import AWS from "./config.js";
import fs from "fs/promises";
import path from "path/promises";

// Initialize S3 client
const s3 = new AWS.S3();

export const uploadToS3 = async (filePath, bucketName, objectKey) => {
  try {
    const fileContent = await fs.readFile(filePath);

    const params = {
      Bucket: bucketName,
      Key: objectKey,
      Body: fileContent,
    };

    const data = await s3.upload(params).promise();
    console.log(`File uploaded successfully. URL: ${data.Location}`);
    return data.Location;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
};

export const downloadFromS3 = async (bucketName, objectKey, downloadPath) => {
  try {
    const params = {
      Bucket: bucketName,
      Key: objectKey,
    };

    const data = await s3.getObject(params).promise();
    await fs.writeFile(downloadPath, data.Body);
    console.log(`File downloaded successfully to ${downloadPath}`);
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};
