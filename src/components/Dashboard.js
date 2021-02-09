import React, { useState, useEffect } from "react";
import { UserContext } from "../utils/userContext";
import Navigation from "./Navigation";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = () => {
  const u_id = localStorage.getItem("alluvia");
  const [user, setUser] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:3990/users/${u_id}`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(
          "There was an error retreving the data from the server",
          error
        );
      });
  }, []);

  return (
    <div>
      <Navigation user={user} />
      <h1>Hello {user.first_name}</h1>
    </div>
  );
};

export default Dashboard;
