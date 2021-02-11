import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/actions/userActions";
import { userReducer } from "../store/reducers/userReducer";
const defaultUser = {
  subscriptions: [],
};
const Dashboard = () => {
  const u_id = localStorage.getItem("alluvia");
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(fetchUser(u_id));
  }, []);

  return (
    <div>
      <Navigation user={userState} />
      {console.log(userState)}
    </div>
  );
};

export default Dashboard;
