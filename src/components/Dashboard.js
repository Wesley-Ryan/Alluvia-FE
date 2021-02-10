import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const defaultUser = {
  subscriptions: [],
};
const Dashboard = () => {
  const u_id = localStorage.getItem("alluvia");
  const [user, setUser] = useState(defaultUser);

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:3990/users/${u_id}`)
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
      {user.subscriptions.map((sub, i) => {
        return (
          <div key={i}>
            <h2>{sub.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
