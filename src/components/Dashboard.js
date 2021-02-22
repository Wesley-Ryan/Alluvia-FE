import React, { useEffect } from "react";
import Navigation from "./Navigation";
import SubscriptionCard from "./SubscriptionCard";
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
      <section className="dashboard">
        {userState.subscriptions.map((subscription, index) => {
          return <SubscriptionCard subscription={subscription} key={index} />;
        })}
      </section>
    </div>
  );
};

export default Dashboard;
