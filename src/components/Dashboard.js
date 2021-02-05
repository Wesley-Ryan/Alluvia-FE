import React, { useContext, useEffect } from "react";
import { UserContext } from "../utils/userContext";
import Navigation from "./Navigation";

const Dashboard = () => {
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    //call to pull user subs here
  }, []);
  console.log(loggedInUser);
  return (
    <div>
      <Navigation />
      <h1>{loggedInUser.message}</h1>
    </div>
  );
};

export default Dashboard;
