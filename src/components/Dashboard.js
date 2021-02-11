import React, { useEffect } from "react";
import Navigation from "./Navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../store/actions/userActions";

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
    </div>
  );
};

export default Dashboard;
