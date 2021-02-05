import React, { useEffect } from "react";
import Navigation from "./Navigation";

const Dashboard = () => {
  //state or context?
  useEffect(() => {
    //call to pull user subs here
  }, []);
  return (
    <div>
      <Navigation />
      Something here.
    </div>
  );
};

export default Dashboard;
