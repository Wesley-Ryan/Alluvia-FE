import React, { useEffect } from "react";
import Navigation from "./Navigation";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = () => {
  const u_id = localStorage.getItem("alluvia");

  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:3990/users/7`)
      .then((response) => {
        console.log("MY RES HERE", response.data);
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
    </div>
  );
};

export default Dashboard;
