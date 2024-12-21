import axiosInstance from "./axios";

export const createProject = async (data) => {
  try {
    const response = await axiosInstance.post("/project/create", data);
    return response.data;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};

export const getProjectsByUser = async (userId) => {
  try {
    const response = await axiosInstance.get(`/project/get/${userId}`);
    return response.data.projects;
  } catch (err) {
    console.log("error", err);
    throw err;
  }
};
