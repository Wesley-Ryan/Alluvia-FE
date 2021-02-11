import React from "react";

const SubscriptionCard = () => {
  return (
    <>
      <div className="sub-card">
        <div className="title-container">
          <img src="https://via.placeholder.com/150" id="card-img" />{" "}
          <h2 className="title">Netflix</h2>
          <h4 className="due-date">DUE IN 3 DAYS</h4>
        </div>
        <div className="cost-container">
          <h4 className="due-date">Due Date: 11/18/2020</h4>
          <h4 className="cost">Cost: $14.99</h4>
          <p>Netflix Standard plan started 09/18/2020</p>
        </div>
      </div>
    </>
  );
};

export default SubscriptionCard;
