import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const defaultUser = {
  subscriptions: [],
};
const Dashboard = () => {
  const u_id = localStorage.getItem("alluvia");
  const [user, setUser] = useState(defaultUser);

  useEffect(async () => {
    await axiosWithAuth()
      .get(`http://localhost:3990/users/7`)
      .then((response) => {
        console.log("MY RES HERE", response.data);
        setUser(response.data);
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
      <Navigation />
      {user.subscriptions.map((sub) => {
        return (
          <div>
            <h2>{sub.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
