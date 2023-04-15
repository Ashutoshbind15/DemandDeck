import axios from "axios";

export const getUserData = async () => {
  const { data } = await axios.get("/api/auth/profile");
  return data;
};

export const demandCreator = async (payload) => {
  return await axios.post("/api/demand", payload);
};

export const getPollsData = async () => {
  const { data } = await axios.get("/api/demand");
  return data;
};