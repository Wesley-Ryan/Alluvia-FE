import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("alluvia");

  return axios.create({
    headers: {
      authorization: token,
    },
  });
};
