import axios from "axios";
import { RegisterUser, LoginUser } from "../models/userModels";

const authClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async (user: RegisterUser) => {
  let response = await authClient.post("/users/add", user);
  return response;
};

export const loginUser = async (user: LoginUser) => {
  let response = await authClient.post("/users/login", user);
  return response;
};
