import { toast } from "react-toastify";
import axios from "axios";

const handleApiError = (error) => {
  if (error.response.data.message) {
    if (error.response.data.message === "Unauthorized Access") {
      localStorage.removeItem("userInfo");
      toast.error("Please Login Again");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);
    } else {
      toast.error(error.response.data.message);
    }
  } else {
    toast.error("Something went wrong, Please try again later.");
  }
};

export const GetApiCall = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    handleApiError(error);
    return { success: false };
  }
};

export const PostApiCall = async (url, formData) => {
  try {
    const { data } = await axios.post(url, formData);
    return data;
  } catch (error) {
    handleApiError(error);
    return { success: false };
  }
};

export const PutApiCall = async (url, formData) => {
  try {
    const { data } = await axios.put(url, formData);
    return data;
  } catch (err) {
    handleApiError(err);
    return { success: false };
  }
};

export const DeleteApiCall = async (url) => {
  try {
    const { data } = await axios.delete(url);
    return data;
  } catch (err) {
    handleApiError(err);
    return { success: false };
  }
};
