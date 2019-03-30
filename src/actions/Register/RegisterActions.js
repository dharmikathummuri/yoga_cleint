import { REGISTER_USER } from "../Constants";
import { RegisterUserApi } from "../../apiEndpoints/RegisterEndPoint";
export const registerUser = params => {
  try {
    const addUser = RegisterUserApi(params);
    return { type: REGISTER_USER, payload: addUser };
  } catch (e) {
    console.error(e);
  }
};
