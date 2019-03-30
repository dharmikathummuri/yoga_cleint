import axios from "axios";

export const RegisterUserApi = customer => {
  return axios.post("http://localhost:3000/customers", { customer });
};
