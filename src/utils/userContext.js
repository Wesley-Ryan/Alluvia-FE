import { createContext } from "react";

const defaultUser = {
  message: "Welcome Default User",
  username: "",
  userId: 0,
};
const UserContext = createContext();

export { UserContext, defaultUser };
