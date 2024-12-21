import axiosInstance from "./axios";

export const createUser = async (data) => {
  try {
    const response = await axiosInstance.post("/user/create", data);
    return response.data;
  } catch (err) {
    console.log("Error creating user:", err);
    throw err;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/user/get");
    return response.data.users;
  } catch (err) {
    console.log("Error fetching users:", err);
    throw err;
  }
};
