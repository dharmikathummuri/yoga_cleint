import { REGISTER_USER } from "../Constants";

export const registerUser = something => {
  try {
    const addUser = "do something " + something;
    return { type: REGISTER_USER, payload: addUser };
  } catch (e) {
    console.error(e);
  }
};
